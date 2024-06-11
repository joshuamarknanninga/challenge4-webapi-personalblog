document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('card', 'mb-3');
        postElement.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-text">${post.content}</p>
                <p class="card-text"><small class="text-muted"><strong>Author:</strong> ${post.username}</small></p>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
});
