// Crie um novo projeto com uma página que tem um formulário para um objeto baseado em uma classe Transacao,
// com no mínimo os campos Descrição (texto) e Valor, e um botão Adicionar que ao clicar adicione uma nova 
// transação, mostrada em uma tabela (<table>). Caso a transação seja com valor negativo (despesa), mostre o valor 
// em vermelho, caso seja positivo (receita), mostre em verde. Ao final da tabela, mostre o total de saldo.

const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const botao = document.querySelector("#botao");
const listTransacoes = document.querySelector("#listTransacoes");
const total = document.querySelector("#total");

class Transacao {
    constructor (descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

let arrayTransacoes = [];

function adicionarTransacoes() {
    let novaTransacao = new Transacao(descricao.value, valor.value);
    arrayTransacoes.push(novaTransacao);
}

function exibirTransacao() {
    listTransacoes.textContent = "";

    arrayTransacoes.forEach(valor => {
        let elementoTr = document.createElement("tr");
        let elementoDescricao = document.createElement("td");
        let elementoValor = document.createElement("td");

        elementoDescricao.textContent = valor.descricao;
        elementoValor.textContent = valor.valor;

        if (Number(valor.valor) > 0) {
            elementoValor.className = "corVerde";
        } else if (Number(valor.valor) < 0) {
            elementoValor.className = "corVermelha"
        } 

        elementoTr.appendChild(elementoDescricao);
        elementoTr.appendChild(elementoValor);

        listTransacoes.appendChild(elementoTr);
    });
}

function somarTotal() {
    let valorTotal = 0;

    arrayTransacoes.forEach(valor => {
        valorTotal += Number(valor.valor)
    })

    total.textContent = valorTotal;
}

botao.addEventListener("click", () => {
    adicionarTransacoes();
    exibirTransacao();
    somarTotal();
})