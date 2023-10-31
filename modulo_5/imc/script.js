import { Modal, handleAlert, imc } from './utils.js';

const form = document.querySelector('form');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const imcResult = document.getElementById('imc-result');


form.onsubmit = (event) => {
    event.preventDefault();
    handleSubmit();
   
}
const handleSubmit = () => {
    const weight = Number(peso.value);
    const height = Number(altura.value);
    const imcValue = imc(weight, height);

    if(weight <= 0 || height <= 0 || isNaN(imcValue)) {
        handleAlert.open();
        return;
    }
    Modal.open();
    imcResult.innerHTML = `Seu IMC é de ${imcValue}`;
}

form.onchange = () => {
    handleAlert.close();
}

