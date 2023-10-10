function showResult(id) {
    const resultText = document.querySelector(id);
    return resultText.classList.toggle('hidden');
}

// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.
// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function helloWorld() {
    alert("Hello World!");
}
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function somar() {
    const num1 = parseFloat(document.getElementById("numero1Soma").value);
    const num2 = parseFloat(document.getElementById("numero2Soma").value);
    const result = `A soma entre ${num1} e ${num2} é ${num1 + num2}`
    if(isNaN(num1) || isNaN(num2)) return alert("Digite um número válido")
    showResult("#sumResult");
    return document.getElementById("resultadoSoma").innerHTML = result;

}

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function isNumber() {
    const num = document.getElementById("isNumber").value;
    const result =  !isNaN(num) && num !== '' ? "É um número" : "Não é um número";
    showResult('#numberResult');
    return document.getElementById("resultadoIsNumber").innerHTML = result;
}


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function isString() {
    const str = document.getElementById("isString").value;
    const result =  isNaN(str) ? "É uma string" : "Não é uma string";
    showResult('#stringResult');
    return document.getElementById("resultadoIsString").innerHTML = result;
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function isBoolean() {
    const bool = document.getElementById("isBoolean").value.toLowerCase();
    const result = bool === 'true' || bool === 'false' || bool === 'verdadeiro' || bool === 'falso' ? "É um booleano" : "Não é um booleano";
    showResult('#boolResult');
    return document.getElementById("resultadoIsBoolean").innerHTML = result;
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function subtrair() {
    const num1 = parseFloat(document.getElementById("numero1Subtracao").value);
    const num2 = parseFloat(document.getElementById("numero2Subtracao").value);
    const result = `A subtração entre ${num1} e ${num2} é ${num1 - num2}`;
    if(isNaN(num1) || isNaN(num2)) return alert("Digite um número válido");
    showResult('#subResult');
    return document.getElementById("resultadoSubtracao").innerHTML = result;
}
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function multiplicar() {
    const num1 = parseFloat(document.getElementById("numero1Multiplicacao").value);
    const num2 = parseFloat(document.getElementById("numero2Multiplicacao").value);
    const result = `A multiplicação entre ${num1} e ${num2} é ${num1 * num2}`;
    if(isNaN(num1) || isNaN(num2)) return alert("Digite um número válido");
    showResult('#multResult');
    return document.getElementById("resultadoMultiplicacao").innerHTML = result;
}

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function dividir() {
    const num1 = parseFloat(document.getElementById("numero1Divisao").value);
    const num2 = parseFloat(document.getElementById("numero2Divisao").value);
    const result = `A divisão entre ${num1} e ${num2} é ${num1 / num2}`;
    if(isNaN(num1) || isNaN(num2)) return alert("Digite um número válido");
    showResult('#divResult');
    return document.getElementById("resultadoDivisao").innerHTML = result;
}

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

function isPar() {
    const num = parseFloat(document.getElementById("isPar").value);
    const result = num % 2 === 0 ? "É um número par" : "Não é um número par";
    if(isNaN(num)) return alert("Digite um número válido");
    showResult("#parResult");
    return document.getElementById("resultadoIsPar").innerHTML = result;
}
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

function isImpar() {
    const num = parseFloat(document.getElementById("isImpar").value);
    const result = num % 2 !== 0 ? "É um número ímpar" : "Não é um número ímpar";
    if(isNaN(num)) return alert("Digite um número válido");
    showResult("#imparResult");
    return document.getElementById("resultadoIsImpar").innerHTML = result;
}