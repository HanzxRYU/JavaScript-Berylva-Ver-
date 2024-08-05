var nilaiUjian = 92;
var Kehadiran = 10;
var TotalPertemuan = 25;
var lulus = (Kehadiran / TotalPertemuan) * 100;

if (nilaiUjian > 85) {
  console.log("Kategori A");
  if (lulus >= 75) {
    console.log("anda lulus!");
  } else {
    console.log("anda noob!");
  }
} else if (nilaiUjian > 70 && nilaiUjian <= 85) {
  console.log("Kategori B");
  if (lulus >= 75) {
    console.log("anda lulus!");
  } else {
    console.log("anda noob!");
  }
} else if (nilaiUjian > 50 && nilaiUjian <= 70) {
  console.log("kategori C");
  if (lulus >= 75) {
    console.log("anda lulus");
  } else {
    console.log("anda noob!");
  }
} else if (nilaiUjian < 50) {
  console.log("Tidak lulus");
}

// gambar 2
var pendaftaran = -1
var pembayaran = -1

if (pendaftaran >0) {
    if (pembayaran >0) {
        console.log("Ikut kursus");       
       }else {
        console.log("Tidak dapat ikut");
        
       }
}else {
    console.log("Tidak dapat Mendaftar");
    
}
