const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let div$$ = document.querySelector("[data-function");
let ul$$ = document.createElement("ul");

for(let e in cars){
    let li$$ = document.createElement("li");
    li$$.textContent = cars[e];
    ul$$.appendChild(li$$);
}
div$$.appendChild(ul$$);

