const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos  e tem habilitação para saber pode entrar no kart');
console.log('Além destas verificações, precisamos saber se esta na lista de presença do horário');

readLine.question('Informe seu ano de nascimento:', ano => {
   if(ano > 2005){
    console.log('Você não tem 18 anos');
   }else{
    readLine.question('Você tem habilitação? (Sim/Nao)', temHabilitacao => {
        if(!(temHabilitacao.toUpperCase() === "SIM")){
            console.log('Você não tem habilitação para entrar no kart')
        }else {
            readLine.question('Qual o seu nome?', nome => {
                switch(nome){
                    case 'Gabriel' : 
                        console.log(`Bem vindo(a) ao Kart ${nome}`)
                        break;
                    case 'Geovanna' : 
                        console.log(`Bem vindo(a) ao Kart ${nome}`)
                        break;
                    default:
                        console.log('Seu nome não esta na lista de presença')
                }
            })
        }
    } )
   }
});