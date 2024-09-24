async function getPostDaily() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (response.status === 200) {
      console.log("Gagal rek");
      return;
    }
    const data = await response.json();
    console.log("Post Title: ", data.title);
  } catch (error) {
    console.error("Terjadi kesalahan", error);
  }
}
getPostDaily();
