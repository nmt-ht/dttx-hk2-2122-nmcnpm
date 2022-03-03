const prompt = require('prompt-sync')({sigint: true});

var n = prompt('Please input n rows: ');
var m = prompt('Please input m columns: ');

var n_rows = n;
var m_columns = m;
var myArray = Array(n_rows).fill(Array(m_columns).fill("0") );

for (let y = 0; y < n_rows; y++ ) 
{
    myArray[y] = [];
    for (let x = 0; x < m_columns; x++ ) { 
        let value = prompt(`Please input value for row ${y} - column ${x} = `);
        myArray[y][x] = value;
    }
 }

 console.log(myArray);

 //Find max value in array
function getArrayMax(array){
    return Math.max.apply(null, array);
}

//Fin min value in array
function getArrayMin(array){
    return Math.min.apply(null, array);
 }

var max_value_result = 0;
var min_value_result = 0;
for(let i = 0; i < myArray.length; i++){
    let max_value = getArrayMax(myArray[i]);  
    let min_value = getArrayMin(myArray[i]);

    if(i == 0) 
        min_value_result = min_value;

    if(max_value > max_value_result)  
        max_value_result = max_value;
    
    if(min_value < min_value_result)
        min_value_result = min_value;
}

console.log(`Max value of array = ${max_value_result}`);
console.log(`Min value of array = ${min_value_result}`);

function findItemInArray(item){
    let found = false;
    for (let y = 0; y < n_rows; y++ ) 
    {
        for (let x = 0; x < m_columns; x++ ) 
        { 
            if(myArray[y][x] == item)
            {
                console.log(`Found out item k = ${item} at (${y}, ${x}).`);
                found = true;
                return;
            }
        }
    }

    if(!found)
        console.log(`Not found out item k = ${item}. Return: (-1, -1).`);
}

var k = prompt('Please input k value for searching in this Array: ');
findItemInArray(k);