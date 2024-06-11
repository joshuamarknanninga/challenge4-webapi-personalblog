document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (username && title && content) {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({ username, title, content });
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        
        window.location.href = 'blog.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('d-none');
        errorMessage.innerText = 'Please fill in all fields.';
    }
});

