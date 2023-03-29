const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstante = 'Minha primeira constante';
console.log(minhaPrimeiraConstante);

let leituraDeCampo;
readLine.question('Informe seu nome:', input => {
    leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});


