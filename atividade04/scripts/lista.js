// Código de barra (String/Number)
// Nome do item (String)
// Preço (Number)
// Comprado (Boolean)
const arrayObjetos = JSON.parse(localStorage.getItem("arrayObjetos")) || [];

function adicionar(item) {
  if (
    item.codigo_barras !== "" &&
    item.nome_item !== "" &&
    item.preco_item !== ""
  ) {
    arrayObjetos.push(item);
    localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));
  }
}

function remover(item) {
  arrayObjetos.splice(item, 1);
  localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));
}

function marcar(item) {}

function desmarcar(item) {}

function listar() {
  return arrayObjetos;
}

export { adicionar, remover, marcar, desmarcar, listar };
