const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    try {
        return Number.parseFloat(numero);
    } catch (e) {
        console.log('Número informado não é válido');
    }
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

readLine.question('Favor informar um número:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readLine.question('Favor informar um segundo número', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question('Favor informar o operador', (operador) => {
                    
                });
            }
        });
    }
});