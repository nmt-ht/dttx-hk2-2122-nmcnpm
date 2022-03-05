const prompt = require('prompt-sync')({sigint: true});

var n = 0; 
var myArray = [];

function inputValueForArray(){
    let question = prompt(`Do you want to input value of array by yourself?[Y/N] `).toString();
    if(question.toLowerCase() == "y")
    {
        n = prompt('Please input n which is lenght of array: ');
        myArray = Array(n).fill("0");
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

 function minSumOfArray(){
   let prev = myArray[0];
   let sum = myArray[0];
    for(let i = 0; i < myArray.length; i++){
        prev = Math.min(parseInt(prev) + parseInt(myArray[i]), parseInt(myArray[i]));
        sum = Math.min(parseInt(sum), parseInt(prev));
    }
    console.log(`MIN sum of array is : ${sum}`);
 }

inputValueForArray();
minSumOfArray();