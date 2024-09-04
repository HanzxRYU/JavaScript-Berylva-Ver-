function multiply(a, b) {
  return a * b;
}
// ngitung bagi (dengan penjelasan 0 tidak bisa dibagi)
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
// AS
export { multiply as kali, divide as bagi };
