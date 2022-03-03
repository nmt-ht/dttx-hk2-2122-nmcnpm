const prompt = require('prompt-sync')({sigint: true});
console.log("Please input n value for calculating T(x, n)");
var x = prompt('Please input x: ');
var n = prompt('Please input n: ');

function calculatingTotal(x, n){
    let total = 0;
    total = Math.pow(x, n);
    console.log(`T(x, n) = ${total}`);
}

calculatingTotal(x, n);
