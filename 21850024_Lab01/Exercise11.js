const prompt = require('prompt-sync')({sigint: true});
console.log("Please input n value for calculating S(n)");
var n = prompt('Please input n: ');

function calculatingTotal(n){
    let total = 0;
    let factorials = 1;
    
    for(let i = 1; i <= n; i ++){
        for(let j = i; j <= i; j++){
            factorials = factorials * i;
        }
        total += factorials;
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
