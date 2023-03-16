const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

countries.forEach((e) => {
    let h4$$ = document.createElement("h4");
    let img$$ = document.createElement("img");
    h4$$.textContent = e.title;
    img$$.setAttribute('src',e.imgUrl)
    document.body.appendChild(h4$$);
    document.body.appendChild(img$$);
    
})

