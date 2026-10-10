// Hitung mundur ke tanggal acara
const eventDate = new Date("Oct 25, 2026 10:00:00").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

  if (distance < 0) {
    timerElement.innerHTML = "Acara sudah dimulai 🎉";
  }
}, 1000);

// Tombol RSVP
function konfirmasi() {
  window.open("https://wa.me/6281234567890?text=Halo%20Jody%20dan%20Laura,%20saya%20akan%20hadir%20di%20acara%20pernikahan%20kalian.", "_blank");
}
// Slideshow otomatis
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Ganti foto tiap 4 detik
}
// Animasi bunga jatuh
const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flowers = [];
const flowerCount = 20;

for (let i = 0; i < flowerCount; i++) {
  flowers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 10 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    drift: Math.random() * 2 - 1
  });
}

function drawFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "pink";
  flowers.forEach(flower => {
    ctx.beginPath();
    ctx.arc(flower.x, flower.y, flower.radius, 0, Math.PI * 2);
    ctx.fill();

    flower.y += flower.speed;
    flower.x += flower.drift;

    if (flower.y > canvas.height) {
      flower.y = -10;
      flower.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawFlowers);
}

drawFlowers();
