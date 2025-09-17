document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.5;
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  }

  // --- Animasi gallery ---
  const photoCards = document.querySelectorAll('.photo-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  photoCards.forEach(card => {
    observer.observe(card);
  });
});