document.addEventListener('DOMContentLoaded', function() {
    const templateSelector = document.getElementById('template-selector');
    const layoutSelector = document.getElementById('layout-selector');
    const themeSelector = document.getElementById('theme-selector');
    const previewIframe = document.getElementById('style-preview');
    const visitButton = document.getElementById('visit-template');

    let selectedTemplate = 'A';
    let selectedLayout = 'layout1';
    let selectedTheme = 'theme1';

    // Clear localStorage when landing on index.html to reset to defaults
    localStorage.removeItem('selectedLayout');
    localStorage.removeItem('selectedTheme');

    // Load preview immediately
    loadPreview();

    // Template selector change
    templateSelector.addEventListener('change', function() {
        selectedTemplate = this.value;
        loadPreview();
    });

    // Layout selector change
    layoutSelector.addEventListener('change', function() {
        selectedLayout = this.value;
        localStorage.setItem('selectedLayout', selectedLayout);
        loadPreview();
    });

    // Theme selector change
    themeSelector.addEventListener('change', function() {
        selectedTheme = this.value;
        localStorage.setItem('selectedTheme', selectedTheme);
        loadPreview();
    });

    // Visit selected style
    visitButton.addEventListener('click', function() {
        localStorage.setItem('selectedLayout', selectedLayout);
        localStorage.setItem('selectedTheme', selectedTheme);
        window.location.href = `${selectedTemplate}/html/home.html?layout=${selectedLayout}&theme=${selectedTheme}`;
    });

    function loadPreview() {
        const previewUrl = `${selectedTemplate}/preview.html?layout=${selectedLayout}&theme=${selectedTheme}`;
        previewIframe.src = previewUrl;
    }
});