const screenTry = document.querySelector('.screen-try');
const screenReset = document.querySelector('.screen-reset');
const valorInput = document.querySelector('#input-number');
const btnTry = document.querySelector('#btn-try');
const btnReset = document.querySelector('#btn-reset');
const inputError = document.querySelector('#input-error');
const textAttempts = document.querySelector('#attempts');
let numeroSorteado =  Math.round(Math.random() * 10);
let tentativas = 0;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleEnterClick);

function handleEnterClick(event) {
    if(event.key === 'Enter' && !screenTry.classList.contains('hidden')) {
        handleTryClick();
    }
    if(event.key === 'Enter' && !screenReset.classList.contains('hidden')) {
        handleResetClick();
    }
}
function handleTryClick(event) {
    event.preventDefault();
    const valor = valorInput.value;
    const valorNumber = Number(valor);
    const isValidValue = valorNumber >= 0 && valorNumber <= 10;
    tentativas++;

    if(!valor || !isValidValue) {
        inputError.textContent = 'Valor inválido';
        return;
    }
        
    if(valor && isValidValue && valorNumber !== numeroSorteado) {
        valorInput.value = '';
        inputError.textContent = `Tentativa ${tentativas}`;
        return;
    }

    if(isValidValue && valorNumber === numeroSorteado) {
        toggleScreen();
        textAttempts.textContent = `Você acertou em ${tentativas} tentativa(s)`;
        return;
    }
}

function handleResetClick() {
    toggleScreen();
    tentativas = 0;
    numeroSorteado =  Math.round(Math.random() * 10);
    inputError.textContent = '';
    valorInput.value = '';
}

function toggleScreen() {
    screenTry.classList.toggle('hidden');
    screenReset.classList.toggle('hidden');
}