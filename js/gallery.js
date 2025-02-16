// Image list for the gallery
const images = [
    "marble_images/photo1.png",
    "marble_images/photo2.png",
    "marble_images/photo3.png",
    "marble_images/photo4.png",
    "marble_images/photo5.png",
    "marble_images/photo6.png"
    "marble_images/photo7.png"
];

let currentIndex = 0;
const galleryImage = document.getElementById("gallery-image");
let autoScrollTimer;

// Function to show an image
function showImage(index) {
    galleryImage.src = images[index];
    galleryImage.style.width = "350px"; // Ensures image stays at 350px width
    galleryImage.style.height = "auto"; // Keeps aspect ratio
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetTimer(); // Reset the timer when manually clicking
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetTimer(); // Reset the timer when manually clicking
}

// Function to start the auto-scroll
function startAutoScroll() {
    autoScrollTimer = setInterval(nextImage, 5000); // Change every 5 seconds
}

// Function to reset the timer
function resetTimer() {
    clearInterval(autoScrollTimer); // Clear existing timer
    startAutoScroll(); // Restart the timer
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex); // Show first image
    startAutoScroll(); // Start auto-scrolling
});
