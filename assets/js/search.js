---
layout: null
---

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("search-box");
  const resultsContainer = document.getElementById("search-results");

  fetch("{{ '/search.json' | relative_url }}")
    .then(response => response.json())
    .then(posts => {
      searchBox.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();
        resultsContainer.innerHTML = "";

        if (query === "") {
          return;
        }

        const searchTerms = query.split(/\s+/);

		const filteredPosts = posts.filter(post => {
          // Verificar si el post cumple con la búsqueda en función de los términos

        const skillMatch = searchTerms.every(term => {
            return post.skills && post.skills.some(skill => skill.toLowerCase().includes(term));
          });

         const difficultyMatch = searchTerms.every(term => {
            return post.difficulty && post.difficulty.toLowerCase().includes(term);
          });

        const osMatch = searchTerms.every(term => {
            return post.os && post.os.toLowerCase().includes(term);
          });

        const titleMatch = searchTerms.every(term => {
            return post.title.toLowerCase().includes(term);
          });

          // Si no se encuentran coincidencias en todos los términos, usamos `.some()` para que se aplique la búsqueda de uno o más términos
          const matchesAll = searchTerms.every(term => {
            return (
              (post.skills && post.skills.some(skill => skill.toLowerCase().includes(term))) ||
              (post.difficulty && post.difficulty.toLowerCase().includes(term)) ||
              (post.os && post.os.toLowerCase().includes(term)) ||
              (post.title.toLowerCase().includes(term))
            );
          });

          // Si el post cumple con la búsqueda de todos los términos, se incluye en los resultados
          return matchesAll;
        });
        if (filteredPosts.length > 0) {
          filteredPosts.forEach(post => {
            const listItem = document.createElement("div");

			const highlightedTitle = highlightText(post.title, query);
            const highlightedDifficulty = highlightText(post.difficulty, query);
            const highlightedOs = highlightText(post.os, query);
            const highlightedSkills = post.skills ? highlightArray(post.skills, query) : "";
            
            listItem.innerHTML = `
			<div class="blog-post">
          		<h3 class="glitch">${post.title}</h3>
            	<h4 class="glitch" style="display: inline;">OS: </h4>

            	<p class="post-meta" style="display: inline;">${highlightedOs}</p>
            <br>

	           <h4 class="glitch" style="display: inline;">Dificultad: </h4>
    	       <p class="post-meta" style="display: inline;">${highlightedDifficulty}</p>
            <br>

        	   <h4 class="glitch" style="display: inline;">Skills: </h4>
            	<code class="post-meta">${highlightedSkills}</code>

            <br>
            <br>
            	<a href="${post.url}" class="glitch-link">Read More</a>  

        </div>
            ` 
            resultsContainer.appendChild(listItem);
          });
        } else {
          resultsContainer.innerHTML = "<span>No se encontraron máquinas.</span>";
        }
      });

    });

// Función para resaltar texto
  function highlightText(text, query) {
	const regex = new RegExp(`(${query.split(/\s+/).join("|")})`, 'gi');
    return text.replace(regex, '<span class="highlight-search glitch">$1</span>');
  }

  function highlightArray(arr, query) {
    return arr.map(item => highlightText(item, query)).join(", ");
  }

});


