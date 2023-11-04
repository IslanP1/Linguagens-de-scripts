// Código de barra (String/Number)
// Nome do item (String)
// Preço (Number)
// Comprado (Boolean)
const arrayObjetos = JSON.parse(localStorage.getItem("arrayObjetos")) || [];
let listaProdutos = document.querySelector("#lista_produtos");

function adicionar(item) {
  if (
    item.codigo_barras !== "" &&
    item.nome_item !== "" &&
    item.preco_item !== ""
  ) {
    arrayObjetos.push(item);
    localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));
    listar(); 
  }
}

function remover(item) {}

function marcar(item) {}

function desmarcar(item) {}

function listar() {
  arrayObjetos.forEach(element => {
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
    botao.textContent = "Remover"
    botao.className = "btn btn-primary";

    elementoAcoes.appendChild(botao);
    
    elementoTr.appendChild(elementoAcoes);

    listaProdutos.appendChild(elementoTr);
  })
}

export { adicionar, remover, marcar, desmarcar, listar };
