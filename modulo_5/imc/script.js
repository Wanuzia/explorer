const calcular = document.getElementById('calcular');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const alerta = document.getElementById('alert');
const modal = document.getElementById('modal');
const imcResult = document.getElementById('imc-result');
const form = document.querySelector('form');
const closeModal = document.querySelector('.close-modal');

form.onsubmit = (event) => {
    event.preventDefault();
    handleSubmit();
   
}
const handleSubmit = () => {
    const weight = Number(peso.value);
    const height = Number(altura.value);
    const imcValue = imc(weight, height);

    if(weight === 0 || height === 0 || isNaN(imcValue)) {
        alerta.classList.add('open');
        return;
    }
    modal.classList.add('open');
    imcResult.innerHTML = `Seu IMC é de ${imcValue}`;
}

closeModal.onclick = () => {
    modal.classList.remove('open');
    peso.value = '';
    altura.value = '';
}

form.onchange = () => {
    alerta.classList.remove('open');
}

const imc = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}