function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (operacao === 'sqrt' || operacao === 'log' || operacao === 'sin' || operacao === 'cos' || operacao === 'tan') {
        if (isNaN(num1)) {
            document.getElementById('resultado').innerText = 'Digite um número!';
            return;
        }
    } else if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Insira números válidos!';
        return;
    }

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
            resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero!';
            break;
        case '^':
            resultado = Math.pow(num1, num2);
            break;
        case 'sqrt':
            resultado = Math.sqrt(num1);
            break;
        case 'log':
            resultado = num1 > 0 ? Math.log10(num1) : 'Erro: Log de número negativo!';
            break;
        case 'sin':
            resultado = Math.sin(num1 * (Math.PI / 180)); 
            break;
        case 'cos':
            resultado = Math.cos(num1 * (Math.PI / 180));
            break;
        case 'tan':
            resultado = Math.tan(num1 * (Math.PI / 180));
            break;
        default:
            resultado = 'Operação inválida!';
    }

    document.getElementById('resultado').innerText = resultado;
}

function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '0';
}
