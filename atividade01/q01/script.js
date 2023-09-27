let botao = document.getElementById("gerar");
let listar = document.getElementsByClassName("listagem")[0];

botao.addEventListener("click", () => {
    gerarNumero();
})

function gerarNumero() {
    let numero = (Math.random()*100).toFixed(0);
    renderizarLi(numero);
}

function renderizarLi(numero) {
    const elemento = document.createElement("li");
    elemento.textContent = numero;
    listar.appendChild(elemento);
}