let div$$ = document.querySelectorAll(".fn-insert-here");

for(let i of div$$){
    let p$$ = document.createElement("p")
    p$$.textContent = "Voy Dentro!";
    i.appendChild(p$$)
}