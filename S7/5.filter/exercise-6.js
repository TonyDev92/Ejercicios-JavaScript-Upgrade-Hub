const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamersLol = streamers.filter((e) => {
    if(e.gameMorePlayed.includes('Legends')){
        if(e.age > 35){
            e.gameMorePlayed = e.gameMorePlayed.toUpperCase();
            return e;
        }
        return e;
    }
})

console.log(streamersLol);

