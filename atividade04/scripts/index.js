import { adicionar, remover, marcar, desmarcar, listar } from "./lista.js";

let codigoBarras = document.querySelector("#codigo_barras");
let nomeItem = document.querySelector("#nome_item");
let precoItem = document.querySelector("#preco");
let statusComprado = document.querySelector("#status_comprado");
let botaoAdicionar = document.querySelector("#botao_adicionar");

botaoAdicionar.addEventListener("click", () => {
  adicionar({
    codigo_barras: codigoBarras.value,
    nome_item: nomeItem.value,
    preco_item: precoItem.value,
    status: statusComprado.checked,
  });
});

listar();