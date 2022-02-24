const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n < 5 || n > 20)
{
    n = prompt('Please only input n value (5 <= n and n <= 20): ');
}

function calculatingTotal(n){
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += Math.floor(Math.pow(i, 2));
    }
    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
