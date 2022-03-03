const prompt = require('prompt-sync')({sigint: true});

console.log("Please input x, n value for calculating T(x, n)");
var x = prompt('Please input x: ');
var n = prompt('Please input n: ');

function calculatingTotal(x, n){
    let total = 0;
    for(let i = 1; i <= n; i ++){
        total += Math.pow(x, i);
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(x, n);
