import { handleAlert, imc, showIMCModalResult } from './utils.js';

const form = document.querySelector('form');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

form.onsubmit = (event) => {
    event.preventDefault();
    handleSubmit();
   
}
const handleSubmit = () => {
    const weight = Number(peso.value);
    const height = Number(altura.value);
    const imcValue = imc(weight, height);
    const isNotValid = weight <= 0 || height <= 0 || isNaN(imcValue);

    if(isNotValid) {
        handleAlert.open();
        return;
    }
    showIMCModalResult(imcValue);
}

form.onchange = () => {
    handleAlert.close();
}

