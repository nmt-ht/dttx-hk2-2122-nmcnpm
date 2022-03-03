const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n <= 6)
{
    n = prompt('Please only input n value (n > 6): ');
}

function calculatingTotal(n){
    let total = 1;
    for(let i = 1; i <= n; i++) {
        total = total * i;
    }

    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
