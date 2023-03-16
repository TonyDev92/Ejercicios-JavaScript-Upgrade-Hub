const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
for(let e in countries){
    let li$$ = document.createElement("li");
    li$$.textContent = countries[e];
    ul$$.appendChild(li$$);
}
