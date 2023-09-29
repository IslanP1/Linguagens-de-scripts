const botao = document.getElementById('botao');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');

botao.addEventListener('click', () => {
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont5 = 0;
    let cont6 = 0;

    for (let i = 0; i <= 1000000; i++) {
        let numero = Math.floor(Math.random() * 6) + 1;
        switch (numero) {
            case 1:
                cont1++;
                break;
            case 2:
                cont2++;
                break;
            case 3:
                cont3++;
                break;
            case 4:
                cont4++;
                break;
            case 5:
                cont5++;
                break;
            case 6:
                cont6++;
                break;
        }
    }

    num1.innerHTML = cont1;
    num2.innerHTML = cont2;
    num3.innerHTML = cont3;
    num4.innerHTML = cont4;
    num5.innerHTML = cont5;
    num6.innerHTML = cont6;
});