const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const index = carousel.querySelector(".index");

let slideIndex = 1;
const slideCount = slides.children.length;

updateIndex();

setInterval(() => {
  if (slideIndex < slideCount) {
    slideIndex++;
  } else {
    slideIndex = 1;
  }
  updateIndex();
  updateSlide();
}, 5000);

function updateIndex() {
  index.textContent = `${slideIndex} / ${slideCount}`;
}

function updateSlide() {
  slides.style.transform = `translateX(-${(slideIndex - 1) * 100 / slideCount}%)`;
}
