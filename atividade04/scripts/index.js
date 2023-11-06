import { adicionar, remover, marcar, desmarcar, listar, gerarCodigoBarras } from "./lista.js";

let nomeItem = document.querySelector("#nome_item");
let precoItem = document.querySelector("#preco");
let botaoAdicionar = document.querySelector("#botao_adicionar");
let listaProdutos = document.querySelector("#lista_produtos");

function renderizarElementos() {
  listaProdutos.textContent = "";

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
    checkbox.id = "statusCheck_" + index;

    elementoComprado.appendChild(checkbox);

    elementoTr.appendChild(elementoCodigoBarras);
    elementoTr.appendChild(elementoNomeItem);
    elementoTr.appendChild(elementoPreco);
    elementoTr.appendChild(elementoComprado);

    let botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.className = "btn btn-primary";
    botao.id = "botaoRemover_" + index;

    elementoAcoes.appendChild(botao);

    elementoTr.appendChild(elementoAcoes);

    listaProdutos.appendChild(elementoTr);

    document.getElementById("botaoRemover_" + index).addEventListener("click", () => {
      remover(index);
      renderizarElementos();
    });

    document.getElementById("statusCheck_" + index).addEventListener("change", (event) => {
      (event.target.checked) ? marcar(index) : desmarcar(index);
      renderizarElementos();
    })
  });
}

botaoAdicionar.addEventListener("click", () => {
  adicionar({
    codigo_barras: gerarCodigoBarras(),
    nome_item: nomeItem.value,
    preco_item: precoItem.value,
    status: false,
  });
  renderizarElementos();
});

renderizarElementos();