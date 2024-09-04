// userUtils.js

// Fungsi default getUser yang mengembalikan string User: [nama]
export default function getUser(name) {
  return `User: ${name}`;
}

// Variabel userRole diatur ke 'admin'
export const userRole = "admin";

// Fungsi getUserRole yang mengembalikan userRole
export function getUserRole() {
  return userRole;
}
