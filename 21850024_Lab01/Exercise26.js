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
        myArray = [10, 20, 30, 20, 50, 10, 40];
    }

    console.log(myArray);
}

function occurredOnceArray(arr, n)
{
    let result = [];
    // Sort the array
    arr.sort(function(a,b)
    {
        return a-b;
    });
  
    // Check for first element
    if (arr[0] != arr[1])
        result.push(arr[0]);
  
    // Check for all the elements
    // if it is different
    // its adjacent elements
    for (let i = 1; i < n - 1; i++)
        if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1])
            result.push(arr[i]);
  
    // Check for the last element
    if (arr[n - 2] != arr[n - 1])
        result.push(arr[n - 1]);
    
    console.log(`Elements are only occurred once: ${result}`);
}

inputValueForArray();
occurredOnceArray(myArray, myArray.length);