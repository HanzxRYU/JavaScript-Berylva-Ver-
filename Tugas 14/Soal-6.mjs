async function checkPostAvailability() {
  try {
    // Mengambil data post dari URL
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Mengecek apakah status kode response bukan 200
    if (response.status !== 200) {
      console.log("Failed to fetch post");
      return; // Menghentikan eksekusi jika gagal
    }

    // Mengubah hasil response menjadi JSON
    const postData = await response.json();

    // Mengecek apakah userId lebih dari 5
    if (postData.userId > 5) {
      console.log("Post is available for user IDs greater than 5");
    } else {
      console.log("Post is not available for user IDs greater than 5");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Memanggil fungsi
checkPostAvailability();
