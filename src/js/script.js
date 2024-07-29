
// slider

const slides = document.querySelectorAll(".slides img");
const zoomImage = document.querySelector(".zoom-image");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlides(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => slide.classList.remove("displaySlide"));
  slides[slideIndex].classList.add("displaySlide");
}

function next() {
  slideIndex++;
  showSlides(slideIndex);
}

function prev() {
  slideIndex--;
  showSlides(slideIndex);
}

const firstImages = document.querySelectorAll(".first-image");

// Zoom-effect
firstImages.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    let rect = image.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let zoomFactor = 2;
    let xPercent = (x / image.offsetWidth) * 150;
    let yPercent = (y / image.offsetHeight) * 150;
    let bgPosX = (xPercent - 50) * zoomFactor + "%";
    let bgPosY = (yPercent - 50) * zoomFactor + "%";

    zoomImage.style.display = "block";
    zoomImage.style.backgroundImage = `url(${image.src})`;
    zoomImage.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
  });

  image.addEventListener("mouseleave", () => {
    zoomImage.style.display = "none";
  });
});

//Tabs//

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((content) => content.classList.remove("active"));
    target.classList.add("active");
  });
});
