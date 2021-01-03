const rect = require('./rectangle');

solveRect = (l, w) => {
    console.log(`solving for rectangle with dimensions ${l} and ${w}`);


    if(l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero, ${l} and ${w} were given.`)
    } else {
        console.log(`area of rectangle is ${rect.area(l,w)}`);
        console.log(`perimeter of rectangle is ${rect.perimeter(l,w)}`);
    }
}



solveRect(2, 4);

solveRect(3, 5);

solveRect(0, 5);

solveRect(5, -3);