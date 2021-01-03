const rect = require('./rectangle');

solveRect = (l, w) => {
    console.log(`solving for rectangle with dimensions ${l} and ${w}`);


    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('Error', err.message);
        } else {
            console.log(`area of rectangle with dimensions ${l} and ${w} is ${rectangle.area()}`);
            console.log(`perimeter of rectangle with dimensions ${l} and ${w} is ${rectangle.perimeter()}`);
        }

    });
    console.log('This statement is logged after the call to rect()');
}



solveRect(2, 4);

solveRect(3, 5);

solveRect(0, 5);

solveRect(5, -3);


console.log("test");
const outerFxn = () => {
    const x = 5;

    const innerFxn = () => {console.log(x)}
    innerFxn();
}
// outerFxn();


const outerFxn2 = () => {
    const x = 5;
    const innerFxn = () => console.log(x);
    return innerFxn;
}

const closureTest = outerFxn();

console.dir(closureTest)
