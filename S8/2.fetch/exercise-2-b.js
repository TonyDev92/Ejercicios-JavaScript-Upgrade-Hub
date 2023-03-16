const agify = (param1) => {
    try{
    fetch(`https://api.nationalize.io?name=${param1}`)
        .then((response) => response.json())
        .then((responseJson) =>  {console.log(responseJson) 
            setNames(responseJson)})
        .catch((err) => console.log(err));
    }catch (error) {
        console.log(error)
    }
}
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");
button$$.addEventListener( "click", () => agify(input$$.value));


const setNames = (param1) => {
    let name = `El nombre ${param1.name} tiene  `;
    let pnames$$ = document.createElement("p");
    document.body.appendChild(pnames$$);
    for(const country of param1.country){
        let pPorcent = Math.floor(country.probability * 100);
        name += ` un ${pPorcent} por ciento de ser ${country.country_id}`;
    }
    pnames$$.textContent = `${name}`;
    
}


