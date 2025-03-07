// Funkcja do otwierania opisu projektu
document.querySelectorAll('.show-description').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();  // Zapobiega domyślnemu zachowaniu (np. przeładowanie strony)
      const projectId = this.getAttribute('data-project');
      const description = document.getElementById(`project-description-${projectId}`);
      description.style.display = 'block';
    });
  });
  
  // Funkcja do zamykania opisu projektu
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const projectId = this.getAttribute('data-project');
      const description = document.getElementById(`project-description-${projectId}`);
      description.style.display = 'none';
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll(".gallery-img");
    const thumbs = document.querySelectorAll(".thumb");
    const prev = document.querySelector(".gallery-prev");
    const next = document.querySelector(".gallery-next");

    function updateGallery(newIndex) {
      images[index].classList.remove("active");
      thumbs[index].classList.remove("active");
      index = newIndex;
      images[index].classList.add("active");
      thumbs[index].classList.add("active");
    }

    prev.addEventListener("click", function() {
      updateGallery((index - 1 + images.length) % images.length);
    });
    next.addEventListener("click", function() {
      updateGallery((index + 1) % images.length);
    });

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", function() {
        updateGallery(i);
      });
    });
  });