// Ambil elemen form
const form = document.getElementById("userForm");

// Tambahkan event listener untuk event submit
form.addEventListener("submit", function (event) {
  // Mencegah pengiriman form secara default
  event.preventDefault();

  // Ambil nilai dari input nama dan email
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Tampilkan alert dengan data yang dimasukkan pengguna
  alert(`Nama: ${name}\nEmail: ${email}`);
});
