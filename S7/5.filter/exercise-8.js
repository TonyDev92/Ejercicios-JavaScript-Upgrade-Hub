const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


let button$$ = document.querySelector("button");
let input$$ = document.querySelector("input");

button$$.addEventListener("click", () => {
    console.log(input$$.value);
    const streamers2 = streamers.filter((e) => { 
        if(e.name.toLowerCase().includes(input$$.value.toLowerCase())){
            return e;
        }
    })
    console.log(streamers2);
})