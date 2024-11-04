// Definisikan custom event bernama customClickEvent
const customClickEvent = new Event("customClickEvent");

// Buat fungsi handleCustomClick yang mencetak pesan ke konsol
function handleCustomClick() {
  console.log("Custom click event triggered!");
}

// Tambahkan event listener untuk menangani customClickEvent
document.addEventListener("customClickEvent", handleCustomClick);

// Tambahkan event listener untuk tombol triggerButton
document.getElementById("triggerButton").addEventListener("click", function () {
  // Memicu customClickEvent saat tombol diklik
  document.dispatchEvent(customClickEvent);
});
