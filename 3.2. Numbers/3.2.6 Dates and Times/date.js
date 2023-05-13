let timestamp = Date.now(); // The current time as a timestamp (a number).
console.log(timestamp);
let now = new Date();       // The current time as a Date object.
console.log(now);
let ms = now.getTime();     // Convert to a millisecond timestamp.
console.log(ms);
let iso = now.toISOString();// Convert to a string in standard format.
console.log(iso);
