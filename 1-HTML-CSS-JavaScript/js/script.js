// alert("hello world!");

// errrooror
console.log("Hello, world!");

function getName() {
    const userName = prompt("what is you name?");
    helloWorld(userName);

}

function helloWorld(userName) {
    // const userName = prompt("what is your name?")
    alert("Hello " + userName + "!");
    console.log("alert sent");

}

function price(age) {
    if (age <= 12 || age >= 65) {
        return 10;
    }
    if (age > 10 && age < 65) {
        return 20;
    }
}