let euro = "€";
let love = "❤️";
euro.length;                // => 1: this character has one 16-bit element
console.log(euro.length);
love.length;                // => 2: UTF-16 encoding of ❤️ is "\ud83udc99";
console.log(love.length);