const tempCelsius = document.getElementById('celsius');
const rendFahrenheit = document.getElementById('temp-fahrenheit');
const rendKelvin = document.getElementById('temp-kelvin');

function converterFahrenheit() {
    if (tempCelsius.value == ""){
        rendFahrenheit.innerHTML = "-";
    } else {
        const tempFahrenheit = (tempCelsius.value * 9/5) + 32;
        rendFahrenheit.innerHTML = tempFahrenheit;
    }
}

function converterKelvin() {
    if (tempCelsius.value == ""){
        rendKelvin.innerHTML = "-";
    } else {
        const tempKelvin = parseFloat(tempCelsius.value) + 273.15;
        rendKelvin.innerHTML = tempKelvin;
    }
}

tempCelsius.addEventListener('keyup', () => {
    converterFahrenheit();
    converterKelvin();
});

converterFahrenheit();
converterKelvin();