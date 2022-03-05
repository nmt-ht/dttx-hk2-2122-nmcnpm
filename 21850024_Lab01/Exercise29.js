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
        myArray = ["cat", "flag", "green", "country", "w3resource"];
    }
    
    sortNumberArray(myArray);
    console.log(myArray);
}

function sortNumberArray(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
}

function longestString(arr)
{
    var max_str_length = arr[0].length;
    var max_str_value = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var max_i_length = arr[i].length;
        if (max_i_length > max_str_length) {
            max_str_value = arr[i];
            max_str_length = max_i_length;
        }
    }

    return max_str_value;
}

inputValueForArray();
let result = longestString(myArray);
console.log(`Longest string of array is ${result}.`);