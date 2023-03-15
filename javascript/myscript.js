// Hello World

console.log("Hello World");

// Carroussel activities section
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselPagination = document.querySelectorAll(".carousel-pagination-item");

let currentIndex = 0;

function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;

  carouselPagination.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

updateCarousel();

carouselPagination.forEach((item) => {
  item.addEventListener("click", () => {
    const index = Number(item.dataset.index);
    currentIndex = index;
    updateCarousel();
  });
});