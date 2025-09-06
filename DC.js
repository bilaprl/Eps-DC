const spinner = document.getElementById("spinner");
const resultEl = document.getElementById("result");
const spinButton = document.getElementById("spinButton");

let isSpinning = false;

spinButton.addEventListener("click", () => {
  if (isSpinning) return; // cegah spam klik

  isSpinning = true;
  spinButton.disabled = true;

  // sembunyikan hasil sebelumnya
  resultEl.style.opacity = 0;

  // Reset rotasi tanpa animasi
  spinner.style.transition = "none";
  spinner.style.transform = "rotate(0deg)";
  void spinner.offsetWidth;

  // Acak episode 1 - 1150
  const episode = Math.floor(Math.random() * 1173) + 1;

  // Rotasi spin: 5 putaran penuh + acak 0-360 derajat
  const randomSpin = 360 * 5 + Math.floor(Math.random() * 360);

  // Jalankan animasi rotasi dengan transisi
  spinner.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
  spinner.style.transform = `rotate(${randomSpin}deg)`;

  // Tampilkan episode setelah animasi selesai (4 detik)
  setTimeout(() => {
    resultEl.textContent = `🎬 Episode ${episode}`;
    resultEl.style.opacity = 1; // <<< munculkan hasilnya
    isSpinning = false;
    spinButton.disabled = false;
  }, 4000);
});
