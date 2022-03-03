const prompt = require('prompt-sync')({sigint: true});

console.log("Please input x, n value for calculating S(x, n)");
var x = prompt('Please input x: ');
var n = prompt('Please input n: ');

function calculatingTotal(x, n){
    let total = 1;
    for(let i = 1; i <= n; i ++){
        var factorials = 1;
        for(let j = 1; j <= i * 2; j++) 
        {
            factorials = factorials * j;
        }
        total += (x * (i* 2))/factorials;
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(x, n);
