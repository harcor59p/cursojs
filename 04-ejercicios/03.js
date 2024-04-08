/* 
indice validar que no sea mnor a ceo y que el elemento 
exista en el arry

*/

function getByIdx(arr , idx) {
    if (idx < 0 || idx > arr.length){
        return 'El indice no es Valido'
    }else {
        return arr[idx] ;
    }
}

let resultado = getByIdx([1,2,3,4], 5);
console.log(resultado);