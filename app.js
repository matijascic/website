const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    themeToggle.textContent = isDark ? 'light' : 'dark';
}

function toggleTheme() {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle.onclick = toggleTheme;

applyTheme(localStorage.getItem('theme') === 'dark');

const routes = {
    '/': 'pages/home.html',
    '/blog': 'pages/blog.html',
    '/about': 'pages/about.html',
    '/links': 'pages/links.html'
};

async function loadBlogPosts() {
    const postList = document.getElementById('post-list');

    try {
        const response = await fetch('blog/posts.json');
        const posts = await response.json();
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        postList.innerHTML = posts.map(post => `
            <div class="blog-item">
                <a href="#/blog/${post.slug}">${post.date} - ${post.title}</a>
                <span class="blog-desc">— ${post.desc}</span>
            </div>
        `).join('');
    } catch (error) {
        postList.innerHTML = '<p>no posts found</p>';
    }
}

async function navigate() {
    const hash = window.location.hash.slice(1) || '/';
    const content = document.getElementById('content');

    document.querySelectorAll('aside nav a').forEach(a => {
        a.classList.remove('active');
    });

    const activeLink = document.getElementById('nav-' + (hash.substring(1) || 'home'));
    if (activeLink) activeLink.classList.add('active');

    const blogPostMatch = hash.match(/^\/blog\/(.+)$/);
    let page;

    if (blogPostMatch) {
        page = 'blog/' + blogPostMatch[1] + '.html';
    } else {
        page = routes[hash] || routes['/'];
    }

    try {
        const response = await fetch(page);
        if (!response.ok) throw new Error('Not found');
        const html = await response.text();
        content.innerHTML = html;

        if (hash === '/blog') {
            await loadBlogPosts();
        }
    } catch (error) {
        content.innerHTML = '<h2>404</h2><p>Page not found.</p>';
    }
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

function copyEmail() {
    navigator.clipboard.writeText('hugomatijascic@gmail.com');
    alert("Mail copied to clipboard");
}