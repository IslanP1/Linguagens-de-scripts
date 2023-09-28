const botao = document.getElementById('calcular');
const listarResultado = document.getElementById('resultado');

let calcularPotencia = (base, expoente) => {
    let resultado = Math.pow(base, expoente);
    listarResultado.innerHTML = resultado;
};

botao.addEventListener('click', () => {
    const base = document.getElementById('base').value;
    const expoente = document.getElementById('expoente').value;
    calcularPotencia(base, expoente);
});

