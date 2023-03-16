const userAnwsers = [];

function confirmExample(string){
    return confirm(string)
}

function promptExample(string){
    return prompt(string)
}

function father(description,callback){
    let resultado = callback(description);
    userAnwsers.push(resultado);
}
father("Confirm",confirmExample);
father("Prompt", promptExample);

console.log(userAnwsers);