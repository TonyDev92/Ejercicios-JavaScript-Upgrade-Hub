const rollDice = (numFace = 10) => {
    return Math.floor(Math.random() * numFace) +1;
}

console.log(rollDice(21));