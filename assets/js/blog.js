document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.querySelector('#posts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>${post.username}</strong> - ${post.timestamp}</p>
                <p>${post.content}</p>
            `;

            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No blog posts yet. Be the first to post!</p>';
    }
});
