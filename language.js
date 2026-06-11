// Language switching system
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to 'es'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    setLanguage(savedLanguage);
    
    // Language button event listeners
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
});

function setLanguage(lang) {
    // Save preference
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'LABEL') {
            element.textContent = text;
        } else {
            element.innerHTML = text;
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}
