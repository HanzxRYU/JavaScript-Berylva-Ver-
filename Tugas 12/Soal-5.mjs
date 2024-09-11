function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message); // Mencetak pesan setelah delay
  }, delay);
}

// Memanggil fungsi dengan pesan "Hello after delay" dan delay 2000 milidetik
delayedMessage("Hello after delay", 2000);
