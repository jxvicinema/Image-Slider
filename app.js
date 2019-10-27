const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".carousel img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let counter = 1;
const size = carouselImages[0].clientWidth;

carousel.style.transform = "translateX(" + -size * counter + "px";

next.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carousel.style.transform = "translateX(" + -size * counter + "px";
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carousel.style.transform = "translateX(" + -size * counter + "px";
});

carousel.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - 2;
    carousel.style.transform = "translateX(" + -size * counter + "px";
  }

  if (carouselImages[counter].id === "first-clone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - counter;
    carousel.style.transform = "translateX(" + -size * counter + "px";
  }
});
