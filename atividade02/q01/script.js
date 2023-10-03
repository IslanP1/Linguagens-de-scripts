// Crie um novo projeto com uma página que tenha 2 campos de texto e 1 botão com o rótulo "Achar".O usuário deve digitar um conjunto de números 
// separados por um "separador"  na primeira caixa de texto e informar o "separador" na segunda caixa e ao clicar no botão, deve ser mostrado em 
// um elemento na tela o maior e o menor número digitado.

// Exemplo: Números "2, 4, 5, 10, 1" e separador "," devem informar os números 1 e 10 como menor e maior, respectivamente.
// Para essa questão, crie um ouvinte de evento no referido botão que busca os valores digitados e os separa.

let numeros = document.querySelector("#numeros");
let separador = document.querySelector("#separador");
let maiorNumero = document.querySelector("#maior");
let menorNumero = document.querySelector("#menor");
let botao = document.querySelector("#botao");

function verificar(array) {
    let maior = Number(array[0]);
    let menor = Number(array[0]);
    
    array.forEach(element => {
        let numero = Number(element);
        if (numero > maior) {
            maior = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    });
    return { maiorNum: maior, menorNum: menor};
}

function exibir(maior, menor) {
    maiorNumero.textContent = maior;
    menorNumero.textContent = menor;
}

botao.addEventListener("click", () => {
    let arrayNum = numeros.value.replace(/\s+/g, "").split(separador.value);
    let maior = verificar(arrayNum).maiorNum;
    let menor = verificar(arrayNum).menorNum;
    exibir(maior, menor);
})