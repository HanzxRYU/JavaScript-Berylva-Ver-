// Fungsi synchronous yang memerlukan waktu 1 detik
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 selesai dalam 1 detik");
    }, 1000); // 1 detik
  });
}

// Fungsi synchronous yang memerlukan waktu 2 detik
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 selesai dalam 2 detik");
    }, 2000); // 2 detik
  });
}

// Fungsi performTasks menggunakan async dan await
async function performTasks() {
  try {
    // Menunggu task1 dan task2 secara berurutan
    const result1 = await task1();
    const result2 = await task2();

    // Menampilkan hasil setelah kedua task selesai
    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.error(`Kesalahan: ${error.message}`);
  }
}

// Menjalankan fungsi performTasks
performTasks();
