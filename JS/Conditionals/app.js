const password = prompt("Please enter a new password:");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}

