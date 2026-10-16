<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Undangan Pernikahan Jody & Laura</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
   <header>
  <h1 class="fade-in">💍 Undangan Pernikahan</h1>
  <h2 class="fade-in delay">Jody Alfian Rahmady & Laura Aprilia</h2>
</header>

  <section class="details">
    <p>Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.</p>
    <h3>📅 Minggu, 25 Oktober 2026</h3>
    <h3>🕒 Pukul 10.00 WIB</h3>
    <h3>📍 Gedung Serbaguna Kebon Baru, Jakarta Selatan</h3>
    <a href="https://maps.google.com" target="_blank">Lihat Lokasi di Google Maps</a>
  </section>

  <section class="countdown">
    <h2>Hitung Mundur Menuju Hari H</h2>
    <div id="timer"></div>
  </section>

  <section class="rsvp">
    <h2>Konfirmasi Kehadiran</h2>
    <button onclick="konfirmasi()">Konfirmasi via WhatsApp</button>
  </section>

  <footer>
    <p>Terima kasih atas doa dan restunya 💕</p>
	<section class="gallery">
  <h2>Galeri Prewedding</h2>
  <div class="slideshow-container">
    <img class="slide" src="images/foto1.jpg" alt="Foto Prewedding 1">
    <img class="slide" src="images/foto2.jpg" alt="Foto Prewedding 2">
    <img class="slide" src="images/foto3.jpg" alt="Foto Prewedding 3">
  </div>
</section>
<section class="music">
  <h2>🎶 Musik Latar</h2>
  <audio id="bg-music" controls autoplay loop>
    <source src="images/music/Mariah Carey, Joe, 98 Degrees - Thank God I Found You (Official HD Video).mp3" type="audio/mpeg">
    Browser Anda tidak mendukung audio.
  </audio>
</section>
  </footer>
  <canvas id="flowerCanvas"></canvas>
</body>
</html>
