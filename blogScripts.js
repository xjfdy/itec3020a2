document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    document.body.style.backgroundColor = "#a4e8f0";

    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                // manipulate postElement to show the content of the blog post with the specific style defined for it
                postElement.classList.add('post');
                postElement.innerHTML = `
                <h2 style="text-align: center">${post.title}</h2>
                <p style="text-align: left; padding: 20px">${post.content}</p> `;
                blogList.appendChild(postElement);
            });
        }) 
    .catch(error => console.error('Error loading blog posts:', error));
});