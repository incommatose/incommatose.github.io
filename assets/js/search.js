document.addEventListener("DOMContentLoaded", function () {
  let searchBox = document.getElementById("search-box");
  let resultsContainer = document.getElementById("search-results");

  fetch("/search.json")
    .then(response => response.json())
    .then(posts => {
      searchBox.addEventListener("input", function () {
        let query = this.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (query.trim() === "") {
          resultsContainer.style.display = "none";
          return;
        }

        let filteredPosts = posts.filter(post =>
          post.title.toLowerCase().includes(query) ||
          (post.skills && post.skills.some(skill => skill.toLowerCase().includes(query)))
        );

        if (filteredPosts.length > 0) {
          resultsContainer.style.display = "grid";
        } else {
          resultsContainer.style.display = "none";
        }

        filteredPosts.forEach(post => {
          let card = document.createElement("div");
          card.className = "blog-post";
          card.innerHTML = `
            <a href="${post.url}">
              <div class="post-card-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                
              </div>
            </a>
          `;
          resultsContainer.appendChild(card);
        });
      });
    });
});
