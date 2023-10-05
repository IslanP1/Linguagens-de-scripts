// Crie um novo projeto com uma página que tenha 2 campos de texto com os rótulos Nome e Salário e 1 botão com o rótulo "Adicionar". 
// O usuário deve digitar esses valores e ao clicar em adicionar, deve ser criado um objeto com essas propriedades e valores e deve ser 
// adicionado a um array. Na sequência, deve mostrar na tela por meio de um elemento <li>. Deve ser exibido também quem ganha o maior salário 
// e o total de salários pagos (utilize a função reduce).

let nome = document.querySelector("#nome");
let salario = document.querySelector("#salario");
let botao = document.querySelector("#botao");

let listaSalarios = document.querySelector("#lista-salarios");
let totalSalarios = document.querySelector("#total-salarios");
let maiorSalario = document.querySelector("#maior-salario");

let arrayObjetos = [];

botao.addEventListener("click", () => {
    adicionarPessoa(nome.value, salario.value);
    contarSalarios();
    definirMaiorSalario();
})

function adicionarPessoa(nome, salario) {
    let objeto = {
        nome: nome,
        salario: salario
    }

    arrayObjetos.push(objeto);
    console.log(arrayObjetos);      

    let pessoa = document.createElement("li");
    pessoa.textContent = `Nome: ${nome}, Salário: ${salario}`;
    listaSalarios.appendChild(pessoa);
}

function contarSalarios() {
    let contadorSalarios = 0;
    arrayObjetos.forEach(element => contadorSalarios++);
    totalSalarios.textContent = `${contadorSalarios}`;
}

function definirMaiorSalario() {
    let salarioMaior = 0;
    let nomePessoaSalarioMaior = "";
    arrayObjetos.forEach((element) => {
        if (Number(element.salario) > salarioMaior) {
            salarioMaior = Number(element.salario);
            nomePessoaSalarioMaior = element.nome;
        }
    });
    maiorSalario.textContent = nomePessoaSalarioMaior;
}