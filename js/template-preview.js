document.addEventListener('DOMContentLoaded', function () {
    const selectTemplateButtons = document.querySelectorAll('.select-template');
    const stylePreviewSection = document.getElementById('style-preview-section');
    const styleButtons = document.querySelectorAll('.style-btn');
    const previewIframe = document.getElementById('style-preview');
    const backButton = document.getElementById('back-to-templates');
    const visitButton = document.getElementById('visit-template');
    const closeButton = document.querySelector('.close-preview');

    let selectedTemplate = null;
    let selectedStyle = localStorage.getItem('selectedStyle') || 'style1';

    // Template selection
    selectTemplateButtons.forEach(button => {
        button.addEventListener('click', function () {
            selectedTemplate = this.getAttribute('data-template');
            showStylePreview();
            scrollToPreview();
        });
    });

    // Style button click handlers
    styleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const style = this.getAttribute('data-style');
            selectedStyle = style;
            updateStyleButtons();
            loadPreview();
        });
    });

    // Back to templates
    backButton.addEventListener('click', function () {
        hideStylePreview();
        scrollToTemplates();
    });

    // Close preview button
    closeButton.addEventListener('click', function () {
        hideStylePreview();
        scrollToTemplates();
    });

    // Visit selected style
    visitButton.addEventListener('click', function () {
        localStorage.setItem('selectedStyle', selectedStyle);
        window.location.href = `${selectedTemplate}/index.html`;
    });

    function showStylePreview() {
        stylePreviewSection.classList.remove('hidden');
        loadPreview();
    }

    function hideStylePreview() {
        stylePreviewSection.classList.add('hidden');
    }

    function loadPreview() {
        const previewUrl = `${selectedTemplate}/preview.html?style=${selectedStyle}`;
        previewIframe.src = previewUrl;
    }

    function updateStyleButtons() {
        styleButtons.forEach(button => {
            if (button.getAttribute('data-style') === selectedStyle) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function scrollToPreview() {
        setTimeout(() => {
            stylePreviewSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    function scrollToTemplates() {
        document.querySelector('.templates').scrollIntoView({ behavior: 'smooth' });
    }
});