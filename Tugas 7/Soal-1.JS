let Biograph = {
  name: "Uddin",
  umur: 15,
  address: {
    Kota: "Bogor",
    negara: "Indonesia",
  },
};
console.log(Biograph);

// mengubah nilai dan mengakses
console.log(Biograph.name);
Biograph.name = "Rafi";
console.log(Biograph.name);

console.log(Biograph.umur);
Biograph.umur = 16;
console.log(Biograph.umur);

console.log(Biograph["name"]);
Biograph.name = "Hannan";
console.log(Biograph.name);

console.log(Biograph["umur"]);
Biograph.umur = 17;
console.log(Biograph.umur);

// menghapus
delete Biograph.Kota;
console.log(Biograph.Kota);
