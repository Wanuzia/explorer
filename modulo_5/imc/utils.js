export const Modal = {
    modal: document.getElementById('modal'),
    closeModal: document.querySelector('.close-modal'),

    open() {
        this.modal.classList.add('open');
    },
    close() {
        this.modal.classList.remove('open');
        peso.value = '';
        altura.value = '';
    },

}
    Modal.closeModal.onclick = () => {
        Modal.close();
    }
export const handleAlert = {
    alerta: document.getElementById('alert'),
    open() {
        this.alerta.classList.add('open');
    },
    close() {
        this.alerta.classList.remove('open');
    }
}

export const imc = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

export const showIMCModalResult = (imcValue) => {
    const imcResult = document.getElementById('imc-result');
    Modal.open();
    return imcResult.innerHTML = `Seu IMC é de ${imcValue}`;
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        Modal.close();
    }
}
)