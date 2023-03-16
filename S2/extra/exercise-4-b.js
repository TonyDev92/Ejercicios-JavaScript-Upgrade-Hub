
function removeItem(array,text){
    const index = findArrayIndex(array,text);
    let nuevoArray = array.splice(index,1);
    return array;
}


function findArrayIndex(array, text) {
    if(array.includes(text)){
        let index = array.indexOf(text);
        return index;
    }
}

const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let nuevoArray = removeItem(arr,'Caracol');
console.log(nuevoArray);
let nuevoArray2 = removeItem(arr,'Salamandra');
console.log(nuevoArray2);