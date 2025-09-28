#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.join(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "news");
const STATIC_DIR = path.join(ROOT, "static");
const STATIC_BUCKET = "news-assets";
const OUTPUT_FILE = path.join(ROOT, "src/data/latest-wiki.js");
const META_JSON_FILE = path.join(ROOT, "src/data/blog-meta.json");
const MAX_WIKI_COUNT = 20;

const toUrlPath = (p) => p.split(path.sep).join("/");

function normalizeImage(image, mdAbsPath, slug) {
  if (!image) return "/img/undraw_docusaurus_mountain.svg";
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith("/")) return image;

  const absImg = path.resolve(path.dirname(mdAbsPath), image);
  if (!fs.existsSync(absImg)) {
    console.warn(`⚠️  image not found: ${image} (at ${mdAbsPath})`);
    return "/img/undraw_docusaurus_mountain.svg";
  }

  const fileName = path.basename(absImg);
  const destDir = path.join(STATIC_DIR, STATIC_BUCKET, slug);
  const destAbs = path.join(destDir, fileName);
  const destUrl = `/${toUrlPath(path.join(STATIC_BUCKET, slug, fileName))}`;

  fs.mkdirSync(destDir, { recursive: true });
  if (!fs.existsSync(destAbs)) fs.copyFileSync(absImg, destAbs);
  return destUrl;
}


function byPinnedThenDate(a, b) {
  if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
  const da = new Date(a.date).getTime();
  const db = new Date(b.date).getTime();
  if (db !== da) return db - da;
  return b.id - a.id;
}

function scanDocsDirectory() {
  const wikiData = [];
  let id = 1;

  function scanDirectory(dir, relativePath = "") {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath, path.join(relativePath, file));
      } else if (/\.(md|mdx)$/i.test(file)) {
        try {
          const content = fs.readFileSync(filePath, "utf8");
          const { data: fm } = matter(content);

          if (fm.title && fm.description && fm.date) {
            const rawSlug = path.join(relativePath, file.replace(/\.(md|mdx)$/i, ""));
            const slug = toUrlPath(rawSlug);

            // 文件路径
            const pagePath = `/news/${slug}`;

            const category = Array.isArray(fm.category)
                ? fm.category.join(", ")
                : (fm.category || "Uncategorized");

            const image = normalizeImage(fm.image, filePath, slug);

            const pinned = Boolean(fm.pinned ?? fm.featured ?? fm.top);
            // 日期建议统一成 YYYY-MM-DD，不做强校验
            wikiData.push({
              id: id++,
              title: fm.title,
              description: fm.description,
              category,
              date: fm.date,
              image,
              slug: pagePath,
              tags: fm.tags || [],
              pinned,
            });
          }
        } catch (error) {
          console.warn(`Warning: Could not parse ${filePath}:`, error.message);
        }
      }
    }
  }

  scanDirectory(DOCS_DIR);
  return wikiData;
}

function generateJavaScriptCode(wikiData) {
  const sortedData = wikiData.sort(byPinnedThenDate).slice(0, MAX_WIKI_COUNT);

  const comparatorSrc = `(a,b)=>{if(a.pinned!==b.pinned)return a.pinned?-1:1;const da=new Date(a.date).getTime(),db=new Date(b.date).getTime();if(db!==da)return db-da;return b.id-a.id;}`;

  return `// Auto-generated Wiki data - Last updated: ${new Date().toISOString()}
export const latestWikiData = ${JSON.stringify(sortedData, null, 2)};

export const sortedWikiData = [...latestWikiData].sort(${comparatorSrc});

export const getLatestWiki = (count = ${MAX_WIKI_COUNT}) => sortedWikiData.slice(0, count);
export const getWikiByCategory = (category) => sortedWikiData.filter(w => w.category === category);
export const searchWikiByTags = (tags) => sortedWikiData.filter(w => tags.some(t => w.tags.includes(t)));
export const getAllCategories = () => [...new Set(sortedWikiData.map(w => w.category))].sort();
export const getAllTags = () => { const s=new Set(); sortedWikiData.forEach(w=>w.tags.forEach(t=>s.add(t))); return [...s].sort(); };
`;
}

function writeBlogMetaJson(wikiData) {
  const metaMap = {};
  for (const w of wikiData) {
    metaMap[w.slug] = { pinned: !!w.pinned, date: w.date };
  }
  fs.mkdirSync(path.dirname(META_JSON_FILE), { recursive: true });
  fs.writeFileSync(META_JSON_FILE, JSON.stringify(metaMap, null, 2), "utf8");
  console.log(`🗂  Wrote blog meta: ${META_JSON_FILE}`);
}

function main() {
  try {
    console.log("🔍 Scanning news directory...");
    const wikiData = scanDocsDirectory();
    if (wikiData.length === 0) {
      console.log("⚠️  No Wiki documents found!");
      return;
    }
    console.log(`📚 Found ${wikiData.length} Wiki documents`);


    const jsCode = generateJavaScriptCode(wikiData);
    fs.writeFileSync(OUTPUT_FILE, jsCode, "utf8");
    writeBlogMetaJson(wikiData);               

    console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
    console.log(`📊 Processed ${wikiData.length} documents`);
    const categories = [...new Set(wikiData.map(w => w.category))];
    console.log(`🏷️  Categories: ${categories.join(", ")}`);
  } catch (error) {
    console.error("❌ Error generating Wiki data:", error);
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = { scanDocsDirectory, generateJavaScriptCode, normalizeImage, byPinnedThenDate };
