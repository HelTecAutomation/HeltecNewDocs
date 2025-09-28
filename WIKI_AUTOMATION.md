# Wiki 数据自动化管理

## 概述

本项目实现了 Wiki 数据的自动化管理，无需手动更新 `src/data/latest-wiki.js` 文件。

## 工作原理

### 1. 自动扫描文档

* 脚本会自动扫描 `docs/` 目录下的所有 Markdown 文件
* 提取每个文件的 frontmatter 信息（标题、描述、分类、日期、标签等）
* 自动生成 `src/data/latest-wiki.js` 数据文件

### 2. 触发时机

* **手动触发**: 运行 `npm run generate-wiki`
* **构建时自动触发**: 运行 `npm run build` 时会自动执行
* **开发时**: 可以随时运行脚本来更新数据

## 使用方法

### 添加新的 Wiki 文档

1. **创建 Markdown 文件**
   在 `docs/` 目录下创建新的 `.md` 或 `.mdx` 文件

2. **添加必要的 frontmatter**
   

```yaml
   ---
   title: "Your Wiki Title"
   description: "Brief description of your wiki content"
   category: "Your Category"
   date: "2024-01-20"
   tags: ["tag1", "tag2", "tag3"]
   image: "/img/your-image.svg"
   ---
   ```

3. **运行生成脚本**
   

```bash
   npm run generate-wiki
   ```

### 更新现有文档

1. **修改 Markdown 文件**的 frontmatter
2. **运行生成脚本**来更新数据

### 构建项目

```bash
npm run build
```

构建时会自动运行 `npm run generate-wiki` ，确保数据是最新的。

## 支持的 Frontmatter 字段

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `title` | string | ✅ | Wiki 标题 |
| `description` | string | ✅ | Wiki 描述 |
| `category` | string | ❌ | 分类（默认：Uncategorized） |
| `date` | string | ✅ | 发布日期（YYYY-MM-DD 格式） |
| `tags` | array | ❌ | 标签数组 |
| `image` | string | ❌ | 图片路径（默认：/img/undraw_docusaurus_mountain.svg） |

## 文件结构

```
heltec_platform/
├── docs/                           # 文档目录
│   ├── your-wiki-1.md             # Wiki 文档 1
│   ├── your-wiki-2.md             # Wiki 文档 2
│   └── subdirectory/
│       └── your-wiki-3.md         # 子目录中的 Wiki
├── scripts/
│   └── generate-wiki-data.js      # 自动化脚本
├── src/
│   └── data/
│       └── latest-wiki.js         # 自动生成的数据文件
└── package.json                    # 包含自动化脚本
```

## 脚本配置

可以在 `scripts/generate-wiki-data.js` 中修改以下配置：

* `MAX_WIKI_COUNT`: 最多显示的 Wiki 数量（默认：20）
* `DOCS_DIR`: 文档目录路径
* `OUTPUT_FILE`: 输出文件路径

## 注意事项

1. **不要手动编辑** `src/data/latest-wiki.js` 文件，它会被脚本覆盖
2. **确保 frontmatter 格式正确**，特别是日期格式
3. **图片路径**应该是相对于网站根目录的路径
4. **分类名称**建议使用英文，保持一致性

## 故障排除

### 脚本无法运行

```bash
# 安装依赖
npm install

# 检查 Node.js 版本（需要 >= 18.0）
node --version
```

### 文档未被识别

* 检查 frontmatter 格式是否正确
* 确保文件扩展名是 `.md` 或 `.mdx`
* 检查必需字段是否完整

### 数据未更新

* 确保运行了 `npm run generate-wiki`
* 检查控制台是否有错误信息
* 验证 Markdown 文件的 frontmatter 语法

## 高级用法

### 自定义分类

```yaml
---
title: "Advanced Topic"
description: "Advanced content description"
category: "Advanced Topics"
date: "2024-01-20"
tags: ["advanced", "expert", "tutorial"]
---
```

### 多语言支持

```yaml
---
title: "Multi-language Title"
description: "Multi-language description"
category: "Tutorials"
date: "2024-01-20"
tags: ["tutorial", "multi-language"]
lang: "en"
---
```

## 贡献指南

1. 创建新的 Wiki 文档时，请遵循现有的 frontmatter 格式
2. 使用清晰的分类和标签
3. 提供有意义的描述
4. 定期运行脚本确保数据同步

---
