// Math Object:
Math.pow(2, 53);            // => 9007199254740992: 2 to the power 53
console.log(Math.pow(2, 53));
Math.round(.6);             // => 1.0: round to the nearest integer
console.log(Math.round(.6));
Math.ceil(.6);              // => 1.0: round up to an integer
console.log(Math.ceil(.6));
Math.floor(.6);             // => 0.0: round down to an integer
console.log(Math.floor(.6));
Math.abs(-5);               // => 5: absolute value
console.log(Math.abs(-5));
// Math.max(x,y,z);         // Return the largest argument
// Math.min(x,y,z);         // Return the smallest argument
Math.random();              // Pseudo-random number x where 0 <= x < 1.0
console.log(Math.random());
Math.PI;                    // => (3.141592653589793) π: circumference of a circle / diameter
console.log(Math.PI);
Math.E;                     // => (2.718281828459045) e: The base of the natural logarithm
console.log(Math.E);
Math.sqrt(3);               // => 3**0.5: the square root of 3
console.log(Math.sqrt(3));
Math.pow(3, 1/3);           // => 3**(1/3): the cube root of 3
console.log(Math.pow(3, 1/3));
Math.sin(0);                // => (0) Trigonometry: also Math.cos, Math.atan, etc.
console.log(Math.sin(0));
Math.log(10);               // => (2.302585092994046) Natural logarithm of 10
console.log(Math.log(10));
Math.log(100) / Math.LN10;  // => 2: Base 10 logarithm of 100
console.log(Math.log(100) / Math.LN10);
Math.log(512) / Math.LN2;   // => 9: Base 2 logarithm of 512
console.log(Math.log(512) / Math.LN2);
Math.exp(3);                // => (20.085536923187668) Math.E cubed
console.log(Math.exp(3));

// ES6 defines more functions on the Math object:
Math.cbrt(27);              // => 3: cube root
console.log(Math.cbrt(27));
Math.hypot(3, 4);           // => 5: square root of sum of squares of all arguments (Pythagoras ya Fady :)
console.log(Math.hypot(3, 4));
Math.log10(100);            // => 2: Base-10 logarithm
console.log(Math.log10(100));
Math.log2(1024);            // => 10: Base-2 logarithm
console.log(Math.log2(1024));
// Math.log1p(x);           // Natural log of (1+x); accurate for very small x
// Math.expm1(x);           // Math.exp(x)-1; the inverse of Math.log1p()
// Math.sign(x);            // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3);             // => 6: optimized multiplication of 32-bit integer
console.log(Math.imul(2,3));
Math.clz32(0xf);            // => 28: number of leading zero bits in a 32-bit integer
console.log(Math.clz32(0xf));
Math.trunc(3.9);            // => 3: convert to an integer by truncating fractional part
console.log(Math.trunc(3.9));
// Math.fround(x);          // Round to nearest 32-bit float number
// Math.sinh(x);            // Hyperbolic sine. Also Math.cosh(), Math.tanh()
// Math.asinh(x);           // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

// Number object:
Infinity;                   // A positive number too big to represent
console.log(Infinity);
Number.POSITIVE_INFINITY;   // Same value
console.log(Number.POSITIVE_INFINITY);
1 / 0;                      // => Infinity
console.log(1 / 0);
Number.MAX_VALUE * 2;       // => Infinity; overflow
console.log(Number.MAX_VALUE * 2);

-Infinity;                  // A negative number too big to represent
console.log(-Infinity);
Number.NEGATIVE_INFINITY;   // The same value
console.log(Number.NEGATIVE_INFINITY);
-1 / 0;                     // => -Infinity
console.log(-1 / 0);
-Number.MAX_VALUE * 2;      // => -Infinity; overflow
console.log(-Number.MAX_VALUE * 2);

NaN;                        // The not-a-number value
console.log(NaN);
Number.NaN;                 // The same value, written another way
console.log(Number.NaN);
0 / 0;                      // NaN
console.log(0 / 0);
Infinity / Infinity;        // Nan
console.log(Infinity / Infinity);

Number.MIN_VALUE / 2;       // => 0: underflow
console.log(Number.MIN_VALUE / 2);
-Number.MIN_VALUE / 2;      // => -0: negative zero
console.log(-Number.MIN_VALUE / 2);
-1 / Infinity;              // => -0: also negative 0
console.log(-1 / Infinity);
-0                          // => -0
console.log(-0);

// The following Number properties are defined in ES6
Number.parseInt();          // Same as the global parseInt() function
Number.parseFloat();        // Same as the global parseFloat() function
// Number.isNaN(x);         // Is x tha NaN value?
// Number.isFinite(x);      // Is x a number and finite?
// Number.isInteger(x);     // Is x an integer?
// Number.isSafeInteger(x); // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER;    // => -(2**53 - 1) 
Number.MAX_SAFE_INTEGER;    // => 2**53 - 1
Number.EPSILON;             // => 2**-52: smallest difference between numbers

let zero = 0;               // Regular zero
let negativeZero = -0;      // Negative zero
zero === negativeZero;      // => true: zero and negative zero are equal
console.log(zero === negativeZero);
1 / zero === 1 / negativeZero;  // => false: Infinity and -Infinity are not equal
console.log(1 / zero === 1 / negativeZero);