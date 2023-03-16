const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
let visit = "(Visitado)";

let visitCities = cities.map((e) => e.isVisited == true ?  e.name + `${visit}` : e.name);

console.log(visitCities);