function calcular(operacao) {
    // Pegando os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Validando se ambos os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos!';
        return;
    }

    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Não é possível dividir por zero!';
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = 'Operação inválida!';
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerText = resultado;
}

// Função para limpar os campos e o resultado
function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '0';
}
