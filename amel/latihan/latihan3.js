// program hitung jumlah vokal menggunakan Regex
var teks = "angkasa pura"

function countVowel(str) {
    // find the count of vowels
    const count = str.match(/[aiueo]/gi).length;

    // return number of vowels
    return count;
}

console.log(countVowel(teks));