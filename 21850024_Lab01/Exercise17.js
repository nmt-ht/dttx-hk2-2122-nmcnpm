const prompt = require('prompt-sync')({sigint: true});

console.log("Please input n value for calculating S(n)");
var n = prompt('Please input n: ');

function calculatingTotal(n){
    let factorials = 1;
    for(let i = 1; i <= n; i ++){
        factorials = factorials * i;
    }

    console.log(`S(n) = ${factorials}`);
}

calculatingTotal(n);
