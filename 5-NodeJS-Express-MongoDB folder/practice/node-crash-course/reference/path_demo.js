const path = require('path');

// base file name 
console.log(__filename); // prints full path to file with filename
console.log(path.basename(__filename)); // just prints filename 
console.log(path.dirname(__filename)); // give just the directory
console.log(__dirname);

// file extension
console.log(path.extname(__filename));

// create path object 
console.log(path.parse(__filename));

// concatenate 
console.log(path.join(__dirname, 'test', 'hello.html'));