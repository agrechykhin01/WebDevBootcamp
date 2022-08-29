const add = function (x, y) {
    return x + y;
}

function callTwice(func) {
    console.log(func(3, 5));
    console.log(func(7, 6));
}

//callTwice(add);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand < 0.5) {
        console.log("good");
        return function () {
            console.log("Congrats! I am a good function!");
        }
    } else {
        console.log("bad");
        return function () {
            console.log("You've been infected by computer virus!");
        }
    }
}

let f = makeMysteryFunc();
f();