// Get all images and track index
const images = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

// Function to show the current image
function showImage(index) {
    const gallery = document.querySelector(".gallery");
    gallery.style.transform = `translateX(-${index * 350}px)`;
}

// Next image function
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Previous image function
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Auto-scroll every 5 seconds
setInterval(nextImage, 5000);