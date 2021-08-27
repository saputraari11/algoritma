const nilai = Number("10")

console.log(Number.isInteger(nilai));
console.log(Number.isNaN(nilai));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(`decimal number = ${nilai.toString(10)}`);
console.log(`biner number = ${nilai.toString(2)}`);
console.log(`oktal number = ${nilai.toString(8)}`);
console.log(`hexadecimal number = ${nilai.toString(16)}`);
// konversi angka ke local dengan syntax id-{dua karakter kapital nama negara}
console.log(nilai.toLocaleString("id-EN"));

