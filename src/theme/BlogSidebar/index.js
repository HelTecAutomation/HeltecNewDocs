import React from 'react';
import Original from '@theme-original/BlogSidebar';
import blogMeta from '@site/src/data/blog-meta.json';

export default function BlogSidebarWrapper(props) {
    const rawItems =
        (props?.sidebar && Array.isArray(props.sidebar.items) && props.sidebar.items) ||
        (Array.isArray(props?.items) ? props.items : []);

    if (!Array.isArray(rawItems) || rawItems.length === 0) {
        return <Original {...props} />;
    }

    const sortedItems = [...rawItems].sort((a, b) => {
        const ma = blogMeta[a.permalink] || {};
        const mb = blogMeta[b.permalink] || {};
        const ap = !!ma.pinned;
        const bp = !!mb.pinned;
        if (ap !== bp) return ap ? -1 : 1;
        const ta = new Date(ma.date || a.date || 0).getTime();
        const tb = new Date(mb.date || b.date || 0).getTime();
        return tb - ta;
    });

    const newSidebar = props.sidebar
        ? { ...props.sidebar, items: sortedItems }
        : undefined;

    return (
        <Original
            {...props}
            {...(newSidebar ? { sidebar: newSidebar } : { items: sortedItems })}
        />
    );
}
