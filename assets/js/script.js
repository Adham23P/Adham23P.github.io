// script.js
const clickableImage = document.getElementById('clickableImage');
const enlargedImage = document.getElementById('enlargedImage');
const closeButton = document.getElementById('closeButton');

clickableImage.addEventListener('click', () => {
    enlargedImage.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    enlargedImage.style.display = 'none';
});

enlargedImage.addEventListener('click', () => {
    enlargedImage.style.display = 'none';
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        enlargedImage.style.display = 'none';
    }
});


function goBack() {
    window.history.back();
}