class Karyawan {
  constructor(nama, gaji, jabatan) {
    this._nama = nama;
    this._gaji = gaji;
    this._jabatan = jabatan;
  }

  // Getter dan Setter untuk nama
  get nama() {
    return this._nama;
  }

  set nama(nama) {
    this._nama = nama;
  }

  // Getter dan Setter untuk gaji
  get gaji() {
    return this._gaji;
  }

  set gaji(gaji) {
    this._gaji = gaji;
  }

  // Getter dan Setter untuk jabatan
  get jabatan() {
    return this._jabatan;
  }

  set jabatan(jabatan) {
    this._jabatan = jabatan;
  }
}

class Manager extends Karyawan {
  constructor(nama, gaji, jabatan, tunjangan) {
    super(nama, gaji, jabatan);
    this._tunjangan = tunjangan;
  }

  // Getter dan Setter untuk tunjangan
  get tunjangan() {
    return this._tunjangan;
  }

  set tunjangan(tunjangan) {
    this._tunjangan = tunjangan;
  }

  beriTunjangan() {
    return `Manager ${this.nama} dengan jabatan ${this.jabatan} diberi gaji sebesar ${this.gaji} Rupiah dan tunjangan sebesar ${this.tunjangan} Rupiah`;
  }
}

// Membuat instance objek Manager
let karyawan1 = new Manager("Hans", 5000000, "Manager", 1000000);

// Menampilkan hasil beriTunjangan
console.log(karyawan1.beriTunjangan());
