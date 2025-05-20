const abrirBtn = document.getElementById("abrirCarouselBtn");
const modal = document.getElementById("carouselModal");
const fecharBtn = document.getElementById("fecharModalBtn");
const carousel = document.getElementById("carousel");

const scrollAmount = carousel.offsetWidth;

function scrollCarousel(direction) {
    const scrollAmount = carousel.offsetWidth; // <-- calcula no momento certo
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
  
// Botões
document.getElementById("prevBtn").onclick = () => scrollCarousel(-1);
document.getElementById("nextBtn").onclick = () => scrollCarousel(1);

// Abrir e fechar modal
abrirBtn.onclick = () => modal.style.display = "flex";
fecharBtn.onclick = () => modal.style.display = "none";

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

// Navegação com setas do teclado
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") scrollCarousel(1);
    if (e.key === "ArrowLeft") scrollCarousel(-1);
  }
});