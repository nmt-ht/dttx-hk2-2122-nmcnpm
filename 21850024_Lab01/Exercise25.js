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
        myArray = [10, 2, 38, 23, 38, 23, 21];
    }

    console.log(myArray);
}


function findMiddleElement(arr){
    let totalArr = parseInt(arr.length);
    let middle = 0;

    if(totalArr % 2 != 0)
        middle = parseInt(totalArr / 2);
    else if(totalArr % 2 == 0)
        middle = parseInt(totalArr / 2) - 1;
    
    console.log(`Middle value of array is ${arr[middle]}.`);
}

inputValueForArray();
findMiddleElement(myArray);