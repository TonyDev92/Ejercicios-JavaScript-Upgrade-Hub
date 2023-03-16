const arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (arr,index1,index2) => {
    const nuevoArray = [...arr];
    const elimina1 = nuevoArray.splice(index1,1);
    const param2 = nuevoArray.splice(index2,0,elimina1);
    return nuevoArray;
} 



console.log(swap(arr,2,0));