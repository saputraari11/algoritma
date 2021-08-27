// Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance object nya
// Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
// Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
// Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__

// semakin ke kanan maka semakin dalam tempat property berada sehingga akhirnya di prototype
// objek instance => instance => prototype

// function Parent(){
//     this.name = ''
// }
// function Child(){
//     // add property inside constructor function by default ins
//     this.name = ''
//     this.callName=function(){
//         return this.name+' inside'
//     }
// }
// add property inside prototype objek by default
// Child.prototype.age = 0;
// Child.prototype.callName = function(){
//     return this.name + ' prototype'
// }
// const prototype = Object.create(Child.prototype)

// const dino = new Child()
// dino.name = 'dino'

// add property inside dino object
// dino.callName=function(){
//     return this.name+' outside'
// }

// Array.prototype.length = 8

// const array = new Array();
// console.log(dino.callName());
// console.log(dino.age);
// console.log(array);
// console.log(Array.prototype.length);

// function Ar(){
//     this.coba = 10
// }
// console.log(Ar.prototype.constructor.prototype.constructor);
