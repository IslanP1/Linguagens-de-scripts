// Crie um novo projeto com uma página que tenha um formulário para adicionar clientes a um banco. 
// Crie uma classe chamada ClienteBanco com os seguintes atributos: Nome, Documento, Saldo. Liste os 
// clientes criados e adicione dois botões em cada um, um para Depositar 100 e outro para Sacar 100. Ao 
// clicar, o objeto em questão deve ter seu saldo alterado, aumentando ou diminuindo seu saldo, e isso deve 
// refletir no que é mostrado na tela.

const nome = document.querySelector("#nome");
const documento = document.querySelector("#documento");
const botao = document.querySelector("#botao");
const clientes = document.querySelector("#clientes")

class ClienteBanco {
    constructor(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    adicionar100() {
        return this.saldo += 100;
    }

    retirar100() {
        if (this.saldo >= 100) {
            return this.saldo -= 100;
        }
    }
}

let arrayClientes = [];
let saldo = 0;

function adicionarCliente() {
    let cliente = new ClienteBanco(nome.value, documento.value, 0);
    arrayClientes.push(cliente);
}

function exibirClientes() {
    clientes.textContent = "";
    arrayClientes.forEach((value, index) => {
        let nome = document.createElement("h2");
        let documento = document.createElement("p");
        let saldo = document.createElement("p");
        let depositar100 = document.createElement("button");
        let sacar100 = document.createElement("button");

        depositar100.addEventListener("click", () => {
            arrayClientes[index].adicionar100();
            exibirClientes();
        })

        sacar100.addEventListener("click", () => {
            arrayClientes[index].retirar100();
            exibirClientes();
        })

        nome.textContent = `Nome: ${value.nome}`;
        documento.textContent = `Documento: ${value.documento}`;
        saldo.textContent = `Salvar: ${value.saldo}`;
        depositar100.textContent = "Depositar 100,00 R$";
        sacar100.textContent = "Sacar 100,00 R$";

        clientes.appendChild(nome);
        clientes.appendChild(documento);
        clientes.appendChild(saldo);
        clientes.appendChild(depositar100);
        clientes.appendChild(sacar100);
    })
}

botao.addEventListener("click", () => {
    adicionarCliente();
    exibirClientes();
})