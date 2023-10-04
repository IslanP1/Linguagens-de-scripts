// Crie uma cópia desse exemplo no seu Codesandbox e crie uma página que exiba todos os filmes contidos na constante filmes. A página também 
// tem que ter 1 campo de texto que ao passo que o usuário digita (evento keyup), ele deve "filtrar" (com o método filter) os filmes exibidos 
// de acordo com o texto. Para comparar os textos, utilize a função "includes''. Desconsidere maiúsculas e minúsculas. Caso não seja digitado 
// nenhum texto, a página deve exibir todos os filmes novamente.

let conteudo = document.querySelector("#conteudo");
let filme = document.querySelector("#filme");
let busca = document.querySelector("#filme-buscado");

const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];

function listarFilmes(listaFilmes, localFilmes) {
    listaFilmes.forEach(element => {
        const titulo = document.createElement("h2");
        const lancamento = document.createElement("p");

        titulo.textContent = `Título: ${element.titulo}`;
        lancamento.textContent = `Lançamento: ${element.lancamento}`;

        localFilmes.appendChild(titulo);
        localFilmes.appendChild(lancamento);
    })
}

function buscarFilmes(buscaFilmes) {
    if (buscaFilmes == "") {
        listarFilmes(filmes, busca);
    } else {
        filmes.filter((filme) => {
            let filmesFiltrados = [];
            let verificaFilme = filme.titulo.toLowerCase().includes(buscaFilmes.toLowerCase());

            if (verificaFilme) {
                filmesFiltrados.push(filme);
                listarFilmes(filmesFiltrados, busca);
            }
        });
    }
}

filme.addEventListener("keyup", () => {
    busca.textContent = "";
    buscarFilmes(filme.value);
})

listarFilmes(filmes, conteudo);