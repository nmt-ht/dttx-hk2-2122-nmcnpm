const prompt = require('prompt-sync')({sigint: true});

console.log("Please input n value for calculating S(n)");
var n = prompt('Please input n: ');

function calculatingTotal(n){
    let total = 0;

    for(let i = 1; i <= n; i ++){
        var subTotal = 0;
        for(let j = 1; j <= i; j++) 
        {
            subTotal += j;
        }

        total += 1/subTotal;
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
