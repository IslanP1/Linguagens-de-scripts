// Código de barra (String/Number)
// Nome do item (String)
// Preço (Number)
// Comprado (Boolean)
const arrayObjetos = JSON.parse(localStorage.getItem("arrayObjetos")) || [];

function adicionar(item) {
  if (
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

function marcar(item) {
  arrayObjetos[item].status = true;
  localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));
}

function desmarcar(item) {
  arrayObjetos[item].status = false;
  localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));
}

function listar() {
  return arrayObjetos;
}

function gerarCodigoBarras() {
  let codigoBarras = "";

  for (let k = 0; k < 13; k++) {
    let numero = Math.floor(Math.random() * 10);
    codigoBarras += numero;
  }

  return codigoBarras;
}

export { adicionar, remover, marcar, desmarcar, listar, gerarCodigoBarras };