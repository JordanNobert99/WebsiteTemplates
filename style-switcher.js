document.addEventListener('DOMContentLoaded', function () {
    const styleButtons = document.querySelectorAll('.style-btn');
    const storedStyle = localStorage.getItem('selectedStyle') || 'style1';

    // Set initial style
    setStyle(storedStyle);
    updateActiveButton(storedStyle);

    // Style button click handlers
    styleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const style = this.getAttribute('data-style');
            setStyle(style);
            updateActiveButton(style);
            localStorage.setItem('selectedStyle', style);
        });
    });

    function setStyle(styleName) {
        // This stores the preference; template pages will read it
        sessionStorage.setItem('activeStyle', styleName);
    }

    function updateActiveButton(styleName) {
        styleButtons.forEach(button => {
            if (button.getAttribute('data-style') === styleName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});