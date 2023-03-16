let btn$$ = document.createElement("button");

btn$$.textContent = "BotonDePrueba";
btn$$.setAttribute("id","btntoclick");


document.body.appendChild(btn$$);

btn$$.addEventListener('click', (e) => { console.log(e)});

