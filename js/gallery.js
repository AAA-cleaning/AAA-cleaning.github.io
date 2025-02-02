// Image list for the gallery
const images = [
    "marble_images/photo1.png",
    "marble_images/photo2.png",
    "marble_images/photo3.png",
    "marble_images/photo4.png"
];

let currentIndex = 0;
const galleryImage = document.getElementById("gallery-image");

// Function to change images manually
function showImage(index) {
    galleryImage.src = images[index];
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