const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const questionCard = document.getElementById('question-card');
const letterCard = document.getElementById('letter-card');
const heartContainer = document.getElementById('heart-container');
const music = document.getElementById('bg-music');
let yesBtnSize = 1;
let lastTimeout;

yesBtn.addEventListener('click', () => {
  questionCard.classList.add('hidden');
  letterCard.classList.remove('hidden');
  startFallingHearts();
  music.play();
});

noBtn.addEventListener('mouseenter', () => {
  if (lastTimeout) clearTimeout(lastTimeout);

  const offsetX = Math.random() * 300 - 150;
  const offsetY = Math.random() * 200 - 100;
  noBtn.style.transition = 'transform 0s';
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

  yesBtnSize += 0.1;
  yesBtn.style.transform = `scale(${yesBtnSize})`;

  lastTimeout = setTimeout(() => {
    noBtn.style.transition = '';
    noBtn.style.transform = '';
  }, 300);
});

function startFallingHearts() {
  for (let i = 0; i < 10; i++) createHeart();
  setInterval(() => {
    for (let i = 0; i < 3; i++) createHeart();
  }, 5000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('falling-heart');
  heart.innerText = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 24 + 16 + 'px';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Modal gallery
const modal = document.getElementById("gallery-modal");
const openGallery = document.getElementById("open-gallery");
const closeGallery = document.getElementById("close-gallery");

openGallery.onclick = () => modal.classList.remove("hidden");
closeGallery.onclick = () => modal.classList.add("hidden");

// Zoom photo
const zoomModal = document.getElementById('zoom-modal');
const zoomImage = document.getElementById('zoomed-img');
const profilePhoto = document.getElementById('her-photo');

profilePhoto.addEventListener('click', () => {
  zoomImage.src = profilePhoto.src;
  zoomModal.classList.remove('hidden');
});

zoomModal.addEventListener('click', () => {
  zoomModal.classList.add('hidden');
});
