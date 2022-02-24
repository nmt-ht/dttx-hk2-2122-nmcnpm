const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n value for calculating S(n): ');;

while(n <= 3 || n >= 50)
{
    n = prompt('Please only input n value in range 4 to 49: ');
}

function calculatingTotal(n){
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    console.log(`S(n) = ${total}`);
}

calculatingTotal(n);
