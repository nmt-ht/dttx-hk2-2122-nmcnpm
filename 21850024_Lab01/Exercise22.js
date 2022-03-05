const prompt = require('prompt-sync')({sigint: true});

var n = 0; 
var myArray = Array(n).fill("0");

function inputValueForArray(){
    let question = prompt(`Do you want to input value of array by yourself?[Y/N] `).toString();
    if(question.toLowerCase() == "y")
    {
        n = prompt('Please input n which is lenght of array: ');
        for (let i = 0; i < n; i++ ) 
        {
            let value = prompt(`Please input element ${i} = `);
            myArray[i] = value;
        }
    }
    else{
        console.log(`Using the default array.`);
        myArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    }
    console.log(myArray);
}

//  function maxSumOfArray(){
//    var prev = myArray[0];
//   var sum = myArray[0];
//     for(let i = 0; i < myArray.length; i++){
//         prev = Math.max(parseInt(prev) + parseInt(myArray[i]), parseInt(myArray[i]));
//         sum = Math.max(parseInt(sum), parseInt(prev));
//     }
//     console.log(sum);
//  }

 function findSubArrayMaxWithIndices(arr) {
    let best = Number.MIN_VALUE;
    let sum = 0;
    let best_start = 0;
    let best_end = 0;
    let current_start = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrValue = parseInt(arr[i]);
        if (sum + arrValue < arrValue) {
            current_start = i;
            sum = arrValue;
        } else {
            sum += arrValue;
        }

        if (best < sum) {
            best = sum;
            best_start = current_start;
            best_end = i;
        }
    }
    console.log(`Best total is ${best}.`);
    console.log(`Sub array has Max Total start from element ${best_start} to ${best_end}.`);
}

//maxSumOfArray();
inputValueForArray();
findSubArrayMaxWithIndices(myArray);