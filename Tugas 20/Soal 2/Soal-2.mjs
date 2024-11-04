// Ambil elemen div
const colorBox = document.getElementById("colorBox");

// Tambahkan event listener untuk event mouseover
colorBox.addEventListener("mouseover", function () {
  colorBox.style.backgroundColor = "orange"; // Warna saat mouse over
});

// Tambahkan event listener untuk event mouseout
colorBox.addEventListener("mouseout", function () {
  colorBox.style.backgroundColor = "lightblue"; // Kembalikan ke warna awal
});
