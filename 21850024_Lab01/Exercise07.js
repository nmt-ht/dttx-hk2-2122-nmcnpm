const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n <= 0)
{
    n = prompt('Please only input n value (n >= 1): ');
}

function calculatingTotal(n){
    let total = 0;
    for(let i = 1; i <= n; i++) {
        if(i == 1 || i == n)
        {
            total += i / (i + 1);
            continue;
        }

        total += (i + 1)/(i + 1);
    }
    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
