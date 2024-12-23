const slides = document.querySelectorAll(".fb-slide");
const pagination = document.querySelector(".fb-pagination");
let counter = 0;

// Initialize slides
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;

  // Create pagination dots
  const dot = document.createElement("div");
  dot.classList.add("fb-dot");
  if (index === 0) dot.classList.add("active"); // Activate the first dot
  dot.dataset.index = index; // Assign an index to each dot
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll(".fb-dot");

function updateSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  updatePagination();
}

function updatePagination() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[counter].classList.add("active");
}

function moveSlides() {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  updateSlides();
}

// Add click event for pagination dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    counter = parseInt(dot.dataset.index);
    updateSlides();
  });
});

// Uncomment this line to enable auto-slide every 4 seconds
 setInterval(moveSlides, 4000);



document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".rv-slider");
  const slides = slider.querySelectorAll("img");
  let currentIndex = 0;

  const autoSlide = () => {
    // Calculate the next index
    currentIndex = (currentIndex + 1) % slides.length;

    // Scroll to the next image
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth",
    });
  };

  // Set the interval for auto-sliding
  const interval = 3000; // Slide every 3 seconds
  setInterval(autoSlide, interval);
});

function updateMapDimensions() {
  const iframe = document.querySelector('#googlelocation');
  if (window.innerWidth <= 476) {
      iframe.style.width = '100%';
      iframe.style.height = '300px'; // Adjust this height based on your design preference.
  } else {
      iframe.style.width = '420px';
      iframe.style.height = '220px';
  }
}

// Run the function on page load and on window resize
window.addEventListener('load', updateMapDimensions);
window.addEventListener('resize', updateMapDimensions);