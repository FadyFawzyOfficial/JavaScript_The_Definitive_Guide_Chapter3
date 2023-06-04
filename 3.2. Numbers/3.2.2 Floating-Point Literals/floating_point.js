3.14
2345.6789
.333333333333
6.02e23                         // 6.02 × 10²³
1.4738223E-32                   // 1.4738223 × 10⁻³²

let billion = 1_000_000_000;    // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF;      // As a bytes separator.
let bits = 0b0001_1101_0111;    // As a nibble separator.
let fraction = 0.123_456_789;   // Works in the fractional part, too.

console.log(billion);
console.log(bytes);
console.log(bits);
console.log(fraction);