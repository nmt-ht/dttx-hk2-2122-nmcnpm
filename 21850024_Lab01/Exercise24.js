const prompt = require('prompt-sync')({sigint: true});

var n = 0; 
var k = 0;
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
        myArray = [1, 2, 4, 5, 6];
    }

    sortNumberArray(myArray);
    console.log(myArray);

    k = prompt('Please input value you want to find in this array: ');
}

function sortNumberArray(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
}

function isFound(arr, k){
    for(let i = 0; i < arr.length; i++)
    {
        let arrValue = parseInt(arr[i]);
        if(arrValue == k){
            return i;
        }
    }
    
    return -1;
}

function findValueInArray(arr, k){
    let found = 0;
    found = parseInt(isFound(arr, k));
    if(found != -1)
    {
        console.log(`Your value ${k} is not found at index ${found}.`)
    }
    else{
        console.log(`Your value ${k} is not found. Push this value to the current array.`)
        arr.push(k);
        sortNumberArray(arr);
        console.log('Finding again....');
        found = isFound(arr, k);
        console.log(`Your value ${k} is not found at index ${found}.`)
    }
}

inputValueForArray();
findValueInArray(myArray, k);