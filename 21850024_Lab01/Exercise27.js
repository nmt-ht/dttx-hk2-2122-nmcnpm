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
        myArray = [1, 1, 2, 2, 3, 3, 3, 2, 4];
    }
    
    sortNumberArray(myArray);
    console.log(myArray);
}

function sortNumberArray(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
}

function removeDuplicateValue(arr)
{
    let uniqueValues = [];
    arr.forEach((value) => {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    });
    console.log(`New array after removing duplicate value: ${uniqueValues}`);
}

inputValueForArray();
removeDuplicateValue(myArray);