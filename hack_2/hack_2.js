/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let keys = Object.keys(obj);
    let value = obj[keys[0]];
    if(value >= 2 && value <= 4)
    result.push(value);
    
  }

 
//export result
module.exports = result;