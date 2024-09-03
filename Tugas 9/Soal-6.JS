class Karyawan {
  constructor(nama, gaji) {
    this._nama = nama;
    this._gaji = gaji;
  }

  // Getter untuk nama
  getNama() {
    return this._nama;
  }

  // Setter untuk nama
  setNama(nama) {
    this._nama = nama;
  }

  // Getter untuk gaji
  getGaji() {
    return this._gaji;
  }

  // Setter untuk gaji
  setGaji(gaji) {
    this._gaji = gaji;
  }
}

class Manajer extends Karyawan {
  constructor(nama, gaji) {
    super(nama, gaji);
    this.laporan = [];
  }

  // Metode untuk membuat laporan
  buatLaporan(laporan) {
    this.laporan.push(laporan);
  }

  // Metode untuk mendapatkan semua laporan
  getLaporan() {
    return this.laporan;
  }
}

// Membuat instance dari kelas Manajer
const manajer = new Manajer("Adit", 10000000);

// Menggunakan metode getter dan setter
console.log(manajer.getNama());
manajer.setNama("yazid");
console.log(manajer.getNama());

console.log(manajer.getGaji());
manajer.setGaji(12000000);
console.log(manajer.getGaji());

// Menggunakan metode buatLaporan
manajer.buatLaporan("Laporan Bulanan");
console.log(manajer.getLaporan());
