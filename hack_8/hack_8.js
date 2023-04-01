/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];

for (let prop in foo) {
    result.push([prop, foo[prop]]);
  }

//export result
module.exports = result; 