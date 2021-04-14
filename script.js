function preencherDados(dados) {
    document.getElementById('foto').innerHTML = "<img class='foto' src='"+dados.avatar_url+"'>";
}


function fetchAPI() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => {console.log(dados)
        console.log("<img class='foto' src='"+dados.message+"'></img>")
        document.getElementById('dog').innerHTML = "<img class='foto' src='"+dados.message+"'></img>";
        }
    )
    
}


window.onload = fetchAPI();

