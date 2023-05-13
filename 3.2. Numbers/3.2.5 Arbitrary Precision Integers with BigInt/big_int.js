1234n;                      // => 1234n: A not-so-big BigInt literal
console.log(1234n);
0b111111n;                  // => 63: A binary BigInt
console.log(0b111111n);
0o7777n;                    // => 4095: An octal BigInt
console.log(0o7777n);
0x800000000000000000000n;   // => 9671406556917033397649408n: 2n**63n: A 64-bit integer
console.log(0x800000000000000000000n);

// You can use BigInt() as a function for converting regular JavaScript numbers or
// strings to BigInt values:
BigInt(Number.MAX_SAFE_INTEGER);    // => 9007199254740991n
console.log(BigInt(Number.MAX_SAFE_INTEGER));
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
console.log(string);
BigInt(string);                     // => 10n**100n: one googol
console.log(BigInt(string));

1000n + 2000n               // => 3000n
console.log(1000n + 2000n);
3000n - 2000n               // => 1000n
console.log(3000n - 2000n);
2000n * 3000n               // => 6000000n
console.log(2000n * 3000n);
3000n / 997n                // => 3n: the quotient is 3
console.log(3000n / 997n);
3000n % 997n                // => 9n: and the remainder is 9
console.log(3000n % 997n);
2n ** 131071n - 1n          // A Huge prime with 39457 decimal digits
console.log(2n ** 131071n - 1n);

1 < 2n;                     // => true
console.log(1 < 2n);
2 > 1n;                     // => true
console.log(2 > 1n);
0 == 0n;                    // => true
console.log(0 == 0n);
0 === 0n;                   // => false: the === checks for type equality as well
console.log(0 === 0n);