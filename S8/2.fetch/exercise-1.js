const agify = fetch('https://api.agify.io?name=michael')
        .then((response) => {console.log(response); return response.json()})
        .then((responseJson) => {console.log(responseJson)})
        .catch((err) => console.log(err));

