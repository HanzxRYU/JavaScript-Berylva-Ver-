async function getUserProfile() {
  try {
    // Mengambil data pengguna dari URL
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Mengecek apakah respon berhasil
    if (!response.ok) {
      throw new Error("Koneksi anda tidak terhubung");
    }

    // Mengubah hasil menjadi JSON
    const userData = await response.json();

    // Mengecek nama pengguna
    if (userData.name === "Leanne Graham") {
      console.log("User is Leanne Graham");
    } else {
      console.log("User is not Leanne Graham");
    }
  } catch (error) {
    console.error("Terjadi kesalahan", error);
  }
}

// Memanggil fungsi
getUserProfile();
