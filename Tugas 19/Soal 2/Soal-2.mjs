// Definisikan custom event bernama buttonClicked
const buttonClicked = new Event("buttonClicked");

// Buat fungsi handleButtonClick yang mencetak pesan ke konsol dan memicu event buttonClicked
function handleButtonClick() {
  console.log("Button was clicked!");
  document.getElementById("parent").dispatchEvent(buttonClicked);
}

// Buat fungsi handleParentClick yang mencetak pesan ke konsol
function handleParentClick() {
  console.log("Parent div received the event!");
}

// Tambahkan event listener untuk elemen parent yang menangani event buttonClicked
document
  .getElementById("parent")
  .addEventListener("buttonClicked", handleParentClick);

// Tambahkan event listener untuk tombol myButton yang menangani event click dan memicu buttonClicked
document
  .getElementById("myButton")
  .addEventListener("click", handleButtonClick);
