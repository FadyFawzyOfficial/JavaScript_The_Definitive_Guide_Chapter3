let x = .3 - .2;            // thirty cents minus 20 cents
let y = .2 - .1;            // twenty cents minus 10 cents
x === y;                    // => false: the two values are not the same!
console.log(x === y);
x === .1;                   // => false: .3-.2 is not equal to .1
console.log(x === .1);
y === .1;                   // => true: false: .2-.1 is equal to .1
console.log(y === .1);