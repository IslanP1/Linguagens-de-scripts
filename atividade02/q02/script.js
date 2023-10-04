// Crie um novo projeto com uma página que tenha apenas um campo de texto, onde o usuário deverá digitar uma Tarefa a ser adicionada quando ele 
// pressionar a tecla "Enter".Mostre a lista de tarefas logo abaixo do campo de texto, apresentando uma opção de "Remover" a tarefa, com um botão 
// ou um ícone como um X.Ao clicar, a tarefa em questão deve ser retirada da lista de tarefas.

let resultadoTarefas = document.querySelector("#resultados");
let textoTarefas = document.querySelector("#tarefa");

let arrayObjetos = [];

function operacoesTexto(tarefa) {
    const conteudo = document.createElement("div");
    const texto = document.createElement("p");
    const botaoRemover = document.createElement("button");
    texto.textContent = tarefa;
    botaoRemover.textContent = "X";

    conteudo.appendChild(texto);
    conteudo.appendChild(botaoRemover);
    resultadoTarefas.appendChild(conteudo);

    let objeto = {
        tarefa : tarefa,
        conteudo : conteudo
    }

    arrayObjetos.push(objeto);

    botaoRemover.addEventListener("click", () => {
        const index = arrayObjetos.indexOf(objeto);
        arrayObjetos.splice(index, 1);
        resultadoTarefas.removeChild(conteudo);
    })
    console.log(arrayObjetos);
}

textoTarefas.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        operacoesTexto(textoTarefas.value);
        textoTarefas.value = "";
        evento.preventDefault();
    }
})