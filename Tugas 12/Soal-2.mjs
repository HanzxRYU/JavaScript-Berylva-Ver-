function printEverySecond() {
    let i = 0; // Variabel yang di-update tiap detik
    const time = setInterval(() => {
      console.log("Hello world"); // Cetak nilai i
      i++; // Naikkan nilai i
      if (i >= 5) { // Contoh kondisi untuk menghentikan interval
        clearInterval(time); // Hentikan interval
      }
    }, 1000); // Interval waktu 1000 milidetik (1 detik)
  }
  
  printEverySecond();
  