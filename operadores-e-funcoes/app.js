const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado) {
        console.log('Número informado não é válido');
    }
    return resultado

}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Oeprador informado é inválido')
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readLine.question('Favor informar um segundo número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`Operaodr selecionado adição, o resultado é ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Operaodr selecionado subtração, o resultado é ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '/': console.log(`Operaodr selecionado divisão, o resultado é ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*': console.log(`Operaodr selecionado multiplicação, o resultado é ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%': console.log(`Operaodr selecionado módulo, o resultado é ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
});