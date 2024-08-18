const fs = require('fs');

const hello = "Hello World";
console.log(hello);

const textIn = fs.readFileSync('./input.txt', 'utf-8');
console.log(textIn);

testVariable = "Fuk you"
const textOut = `sup bro, im new here: ${testVariable}.\n ${Date.now()}`;

fs.writeFileSync('./ouput.txt', textOut);

// Now the async way

fs.readFile('./asyncText.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log("reading doc...")