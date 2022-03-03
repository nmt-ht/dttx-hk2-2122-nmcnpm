const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n <= 5)
{
    n = prompt('Please only input n value (n > 5): ');
}

function calculatingTotal(n){
    let total = 0;
    for(let i = 1; i <= n; i++) {
        if(i == 1)
        {
            total = i / (2 * i);
            continue;
        }
        total += (2 * i) + 1 / (2 * i) + 2;
    }
    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
