let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess === 'q') break;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess!");
    } else {
        guess = prompt("Too low! Enter a new guess!");
    }
}

console.log(`You got it! It tooks you ${attempts} guesses!`);