const gasolina = document.getElementById('gasolina').value;
const alcool = document.getElementById('alcool').value;
const botao = document.getElementById('calcular');

function calcularMelhorCombustivel(gasolina, alcool) {
    let resultado = alcool / gasolina;
    if (resultado <= 0.7) {
        return 1;
    } else {
        return 0;
    }
}

botao.addEventListener('click', () => {
    let resultado = calcularMelhorCombustivel(gasolina, alcool);
    if (resultado == 1) {
        alert('Melhor utilizar álcool');
    } else {
        alert('Melhor utilizar gasolina');
    }
});
