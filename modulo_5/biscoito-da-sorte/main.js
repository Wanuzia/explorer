const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "A gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vai mais longe do que muito conhecimento.",
    "Quem quer colher rosas deve suportar os espinhos.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Não há melhor negócio que a vida. A gente a obtém a troco de nada.",
    "O riso é a menor distância entre duas pessoas.",
    "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.",
    "É mais fácil conseguir o perdão do que a permissão.",
    "Os defeitos são mais fortes quando o amor é fraco.",
    "Amizade e Amor são coisas que podem virar uma só num piscar de olhos.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.",
    "Todo mundo é capaz de denominar uma dor, exceto quem a sente.",
    "A paciência na adversidade é o sinal de um coração sensível.",
];

const closedCookie = document.querySelector('#closed-cookie');
const openedClass = document.querySelector('#opened');
const closedClass = document.querySelector('#closed');
const openedCookie = document.querySelector('#btnClose');

closedCookie.addEventListener('click', openMessage);
openedCookie.addEventListener('click', toggleCookies);

function openMessage() {
    const message = document.querySelector('#message');
    message.innerHTML = randomMessage();
    toggleCookies();
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function toggleCookies() {
    openedClass.classList.toggle('hidden');
    openedClass.classList.toggle('screen-opened');
    closedClass.classList.toggle('hidden');
    closedClass.classList.toggle('screen-closed');
}

