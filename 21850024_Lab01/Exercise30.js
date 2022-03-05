const prompt = require('prompt-sync')({sigint: true});

var value = prompt(`Please input your string which need to be check: `);
console.log(`Start checking on each character of '${value}' to find unique character...`);
var arr = value.split("");
console.log(arr);

function findUniqueChar(arr){
    let uniqueValues = [];
    arr.forEach((value) => {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    });

    if(uniqueValues.length == arr.length)
        return true;
    
    return false;
}

var result = findUniqueChar(arr);
console.log(result);


