// Fungsi untuk mensimulasikan delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Fungsi async yang menggunakan delay
async function simulateDelay() {
  console.log("Waiting for 2 seconds...");
  await delay(2000); // Tunggu selama 2 detik
  return "Delay finished"; // Kembalikan string setelah delay
}

// Memanggil fungsi dan menampilkan hasil di konsol
simulateDelay().then((result) => console.log(result));
