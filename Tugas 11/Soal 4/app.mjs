// app.js

// Impor fungsi default getUser dan named export userRole, getUserRole dari userUtils.js
import getUser, { userRole, getUserRole } from "./userUtils.mjs";

// Gunakan fungsi getUser untuk menyapa nama tertentu dan tampilkan hasilnya di konsol
console.log(getUser("Alice"));
console.log(getUser("Bob"));

// Tampilkan nilai userRole ke konsol
console.log(`User role: ${userRole}`);

// Tampilkan hasil dari getUserRole ke konsol
console.log(`User role from function: ${getUserRole()}`);
// yale yalele