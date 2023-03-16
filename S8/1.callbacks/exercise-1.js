const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function father(a,b,callback){
    let resultado = callback(a,b);
    numbersList.push(resultado);
}
father(5,7,sum);
father(20,30,substract);
father(30,2,substract);
father(20,10,sum);
console.log(numbersList);


