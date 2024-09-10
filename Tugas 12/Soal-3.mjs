function greeter(name, callback) {
  console.log("Hello " + name);
  callback(name); // Panggil callback sekali
  setTimeout(() => {
    // Tidak memanggil callback lagi atau ganti dengan fungsi kosong
  }, 2000);
}

function sayGoodbye() {
  console.log("Goodbye");
}

greeter("H A N S ", sayGoodbye);
