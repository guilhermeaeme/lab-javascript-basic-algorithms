// Names and Input
let hacker1 = "Guilherme";
let hacker2 = process.argv[2];

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if(hacker1Length > hacker2Length) {
    console.log(`The Driver has the longest name, it has ${hacker1Length} characters`);
} else if(hacker2Length > hacker1Length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2Length} characters`);
} else {
    console.log(`Wow, you both got equally long names, ${hacker1Length} characters!!`);
}

// Loops
let result = hacker1.split("").join(" ").toUpperCase();

console.log(result);

console.log(hacker1.split("").reverse().join(''));

if(hacker1.localeCompare(hacker2) > 0) {
    console.log(`The driver's name goes first`);
} else if(hacker2.localeCompare(hacker1) > 0) {
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both got the same name?`);
}
