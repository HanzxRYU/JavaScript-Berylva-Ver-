function simulateTask() {
  return new Promise((resolve, reject) => {
    const delay = 2500; // Menggunakan nilai tetap untuk penundaan, misalnya 2500 ms (2,5 detik)

    setTimeout(() => {
      if (delay <= 2000) {
        resolve("Task Success"); // Resolve jika penundaan <= 2000 ms
      } else {
        reject("Task Failed"); // Reject jika penundaan > 2000 ms
      }
    }, delay);
  });
}

// Memanggil fungsi simulateTask dan menggunakan chaining
simulateTask()
  .then((result) => {
    console.log(result); // Menampilkan hasil jika berhasil
  })
  .catch((error) => {
    console.log(error); // Menangani error jika gagal
  })
  .finally(() => {
    console.log("Task completed"); // Menampilkan pesan setelah semua selesai
  });
