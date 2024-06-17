document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#blogForm');
    const errorMessage = document.querySelector('#error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.querySelector('#username').value.trim();
        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#content').value.trim();

        if (username && title && content) {
            const blogPost = {
                username: username,
                title: title,
                content: content,
                timestamp: new Date().toLocaleString()
            };

            const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            blogPosts.push(blogPost);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

            window.location.href = 'blog.html';
        } else {
            errorMessage.classList.remove('d-none');
        }
    });

    const submitButton = form.querySelector('button[type="button"]');
    submitButton.addEventListener('click', function () {
        form.dispatchEvent(new Event('submit'));
    });
});

