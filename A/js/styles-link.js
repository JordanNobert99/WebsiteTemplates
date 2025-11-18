document.addEventListener('DOMContentLoaded', function () {
    // Load stylesheets
    const layoutLink = document.getElementById('layout-link');
    const themeLink = document.getElementById('theme-link');
    const params = new URLSearchParams(window.location.search);
    const layout = params.get('layout') || 'layout1';
    const theme = params.get('theme') || 'theme1';

    layoutLink.href = `../css/${layout}.css`;
    themeLink.href = `../css/${theme}.css`;

    // Preserve URL parameters in navigation links
    setTimeout(() => {
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.includes('?')) {
                const params = new URLSearchParams(window.location.search);
                const layout = params.get('layout');
                const theme = params.get('theme');
                
                if (layout || theme) {
                    let newHref = href + '?';
                    if (layout) newHref += `layout=${layout}`;
                    if (layout && theme) newHref += '&';
                    if (theme) newHref += `theme=${theme}`;
                    link.setAttribute('href', newHref);
                }
            }
        });
    }, 100);
});

// Load stylesheets immediately (synchronously)
(function() {
    const params = new URLSearchParams(window.location.search);
    const layout = params.get('layout') || 'layout1';
    const theme = params.get('theme') || 'theme1';

    const layoutLink = document.getElementById('layout-link');
    const themeLink = document.getElementById('theme-link');

    if (layoutLink) layoutLink.href = `../css/${layout}.css`;
    if (themeLink) themeLink.href = `../css/${theme}.css`;
})();

// Preserve URL parameters in navigation links
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.querySelectorAll('a[href$=".html"]').forEach(link => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.includes('?')) {
                const params = new URLSearchParams(window.location.search);
                const layout = params.get('layout');
                const theme = params.get('theme');
                
                if (layout || theme) {
                    let newHref = href + '?';
                    if (layout) newHref += `layout=${layout}`;
                    if (layout && theme) newHref += '&';
                    if (theme) newHref += `theme=${theme}`;
                    link.setAttribute('href', newHref);
                }
            }
        });
    }, 0);
});