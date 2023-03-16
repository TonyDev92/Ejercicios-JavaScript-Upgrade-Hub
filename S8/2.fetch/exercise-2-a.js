const agify = (param1) => {
    try{
    fetch(`https://api.nationalize.io?name=${param1}`)
        .then((response) => {console.log(response); return response.json()})
        .then((responseJson) => {console.log(responseJson)})
        .catch((err) => console.log(err));
    }catch (error) {
        console.log(error)
    }
}
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");

const getDates = button$$.addEventListener( "click", () => agify(input$$.value));






