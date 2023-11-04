import { adicionar, remover, marcar, desmarcar, listar } from "./lista.js";

let codigoBarras = document.querySelector("#codigo_barras");
let nomeItem = document.querySelector("#nome_item");
let precoItem = document.querySelector("#preco");
let statusComprado = document.querySelector("#status_comprado");
let botaoAdicionar = document.querySelector("#botao_adicionar");
let listaProdutos = document.querySelector("#lista_produtos");

function renderizarElementos() {
  let arrayObjetos = listar();

  arrayObjetos.forEach((element, index) => {
    let elementoTr = document.createElement("tr");
    let elementoCodigoBarras = document.createElement("td");
    let elementoNomeItem = document.createElement("td");
    let elementoPreco = document.createElement("td");
    let elementoComprado = document.createElement("td");
    let elementoAcoes = document.createElement("td");

    elementoCodigoBarras.textContent = element.codigo_barras;
    elementoNomeItem.textContent = element.nome_item;
    elementoPreco.textContent = element.preco_item;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = element.status;

    elementoComprado.appendChild(checkbox);

    elementoTr.appendChild(elementoCodigoBarras);
    elementoTr.appendChild(elementoNomeItem);
    elementoTr.appendChild(elementoPreco);
    elementoTr.appendChild(elementoComprado);

    let botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.className = "btn btn-primary";
    botao.id = "botaoRemover";

    elementoAcoes.appendChild(botao);

    elementoTr.appendChild(elementoAcoes);

    listaProdutos.appendChild(elementoTr);
  });
}

botaoAdicionar.addEventListener("click", () => {
  adicionar({
    codigo_barras: codigoBarras.value,
    nome_item: nomeItem.value,
    preco_item: precoItem.value,
    status: statusComprado.checked,
  });
  renderizarElementos();
});

renderizarElementos();