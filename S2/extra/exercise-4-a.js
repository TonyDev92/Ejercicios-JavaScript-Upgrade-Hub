const arr = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function findArrayIndex(array, text) {
    if(array.includes(text)){
        let index = array.indexOf(text);
        return index;
    }
}

let ind = findArrayIndex(arr,'Mosquito');
console.log(ind);
let ind2 = findArrayIndex(arr,'Salamandra');
console.log(ind2);
