// Admin Panel System
const ADMIN_PASSWORD = "Praxys2025!";

document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupAdminListeners();
});

// Admin Button Click
document.getElementById('admin-toggle')?.addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'flex';
});

document.getElementById('admin-close-btn')?.addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('login-error').textContent = '';
});

document.getElementById('admin-login-btn')?.addEventListener('click', function() {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadArticlesAdmin();
    } else {
        document.getElementById('login-error').textContent = 'Contraseña incorrecta';
    }
});

document.getElementById('admin-logout-btn')?.addEventListener('click', function() {
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('admin-password').value = '';
});

// Add Article
document.getElementById('add-article-btn')?.addEventListener('click', function() {
    const title = document.getElementById('article-title').value;
    const author = document.getElementById('article-author').value;
    const link = document.getElementById('article-link').value;
    const date = document.getElementById('article-date').value;
    const desc = document.getElementById('article-desc').value;

    if (!title || !author || !link || !date) {
        alert('Completa todos los campos requeridos');
        return;
    }

    const articles = JSON.parse(localStorage.getItem('praxys_articles') || '[]');
    const newArticle = {
        id: Date.now(),
        title,
        author,
        link,
        date,
        desc
    };

    articles.push(newArticle);
    localStorage.setItem('praxys_articles', JSON.stringify(articles));

    document.getElementById('article-title').value = '';
    document.getElementById('article-author').value = '';
    document.getElementById('article-link').value = '';
    document.getElementById('article-date').value = '';
    document.getElementById('article-desc').value = '';

    loadArticlesAdmin();
    loadArticles();
    alert('Artículo agregado exitosamente');
});

function loadArticles() {
    const articles = JSON.parse(localStorage.getItem('praxys_articles') || '[]');
    const container = document.getElementById('articles-container');
    const emptyMsg = document.getElementById('articles-empty');

    if (articles.length === 0) {
        container.innerHTML = '<div class="articles-empty"><p data-es="Próximamente..." data-en="Coming Soon...">Próximamente...</p></div>';
        return;
    }

    emptyMsg?.remove();
    container.innerHTML = '';

    articles.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <div class="article-header">
                <h3>${article.title}</h3>
                <span class="article-date">${new Date(article.date).toLocaleDateString('es-ES')}</span>
            </div>
            <p class="article-author">Por ${article.author}</p>
            <p class="article-desc">${article.desc}</p>
            <a href="${article.link}" target="_blank" class="article-link">Leer más →</a>
        `;
        container.appendChild(card);
    });
}

function loadArticlesAdmin() {
    const articles = JSON.parse(localStorage.getItem('praxys_articles') || '[]');
    const container = document.getElementById('admin-articles-container');
    container.innerHTML = '';

    articles.forEach(article => {
        const item = document.createElement('div');
        item.className = 'admin-article-item';
        item.innerHTML = `
            <div class="admin-article-info">
                <h4>${article.title}</h4>
                <p>${article.author} - ${article.date}</p>
            </div>
            <button onclick="deleteArticle(${article.id})" class="delete-btn">Eliminar</button>
        `;
        container.appendChild(item);
    });
}

function deleteArticle(id) {
    if (confirm('¿Eliminar este artículo?')) {
        let articles = JSON.parse(localStorage.getItem('praxys_articles') || '[]');
        articles = articles.filter(a => a.id !== id);
        localStorage.setItem('praxys_articles', JSON.stringify(articles));
        loadArticlesAdmin();
        loadArticles();
    }
}

function setupAdminListeners() {
    // Placeholder updates for language
    document.addEventListener('languageChanged', function() {
        const inputs = {
            'article-title': ['data-placeholder-es', 'data-placeholder-en'],
            'article-author': ['data-placeholder-es', 'data-placeholder-en'],
            'article-link': ['data-placeholder-es', 'data-placeholder-en'],
            'article-date': ['data-placeholder-es', 'data-placeholder-en'],
            'article-desc': ['data-placeholder-es', 'data-placeholder-en']
        };
    });
}
