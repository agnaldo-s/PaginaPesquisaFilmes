let container = document.querySelector('.container');
let table = document.querySelector('.table');
let formulario = document.querySelector('.formulario');
let filme = document.querySelector('.filme')

formulario.addEventListener('submit', async function(event){
    event.preventDefault()
    getFilme(filme.value)
    
})


async function getFilme(name){
    let request = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=e6c43dc6`);
    let response = await request.json();
    let result = response.Search;
    table.innerHTML = '';
    if(result ==undefined){
        table.innerHTML += `<p>Nemnhum resultado encontrado</p>`
    }
    else{
        result.forEach(function(item){
            table.innerHTML += `
            <div class="carde">
                <img src="${item['Poster']}">
                <p>${item['Title']}</p>
            </div>
            `
        })
    }
}




