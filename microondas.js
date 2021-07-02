// Programação Imperativa
// Checkpoint II - Microondas - 02.07.2021
// Leonardo Vinicios Bueno dos Santos

// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
// Veja abaixo os requisitos do projeto:
// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 
// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

const microondas = (prato, tempo) => {
    if (typeof prato != 'string' ||  typeof tempo != 'number') {
        return "Prato inexistente"
    }
    else if (prato == "pipoca" && tempo == 10) {
        return "Prato pronto, bom apetite!!!"
    }
    else if (prato == "pipoca" && tempo < 10) {
        return "Tempo insuficiente"
    }
    else if (prato == "pipoca" && tempo == 20) {
        return "Queimou"
    }
    else if (prato == "pipoca" && tempo >= 30) {
        return "kabumm"
    }
    else if(prato == "pipoca" && tempo > 10 && tempo < 20){
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "pipoca" && tempo > 20 && tempo < 30){
        return "Queimou"
    }
    
    else if (prato == "macarrao" && tempo == 8) {
        return "Prato pronto, bom apetite!!!"
    }   
    else if (prato == "macarrao" && tempo <= 7) {
        return "Tempo insuficiente"
    }
    else if (prato == "macarrao" && tempo == 16) {
        return "Queimou"
    }
    else if (prato == "macarrao" && tempo >= 24) {
        return "kabumm"
    }
    else if(prato == "macarrao" && tempo > 8 && tempo <16){
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "macarrao" && tempo > 16 && tempo < 24){
        return "Queimou"
    }
    
    else if(prato == "carne" && tempo == 15) {
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "carne" && tempo <= 14){
        return "Tempo insuficiente"
    }
    else if(prato == "carne" && tempo == 30){
        return "Queimou"
    }
    else if(prato == "carne" && tempo >= 45){
        return "kabumm"
    }
    else if(prato == "carne" && tempo > 15 && tempo < 30){
        return "queimou"
    }
    else if(prato == "carne" && tempo > 30 && tempo < 45){
        return "Queimou"
    }
   
    else if(prato == "feijao" && tempo == 12) {
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "feijao" && tempo <= 11){
        return "Tempo insuficiente"
    }
    else if(prato == "feijao" && tempo == 24){
        return "Queimou"
    }
    else if(prato == "feijao" && tempo >= 36){
        return "kabumm"
    }
    else if(prato == "feijao" && tempo > 12 && tempo <24){
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "feijao" && tempo > 24 && tempo < 36){
        return "Queimou"
    }
    
    else if(prato == "brigadeiro" && tempo == 8) {
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "brigadeiro" && tempo <= 7){
        return "Tempo insuficiente"
    }
    else if(prato == "brigadeiro" && tempo == 16){
        return "Queimou"
    }
    else if(prato == "brigadeiro" && tempo >= 24){
        return "kabumm"
    }
    else if(prato == "brigadeiro" && tempo > 8 && tempo <16){
        return "Prato pronto, bom apetite!!!"
    }
    else if(prato == "brigadeiro" && tempo > 16 && tempo < 24){
        return "Queimou"
    }
    else if(prato != "pipoca" || prato != "macarrão" || prato != "carne" || prato != "feijao" || prato != "brigadeiro"){
        return "Queimou"
    }
}

console.log(microondas("brigadeiro", 24))


// Tentei fazer com objeto literal e function mas não deu certo =)

// function(menu("pipoca", 30));

// var pipoca = new menu('Pipoca', 10);
// var macarrao = new menu('Macarrão', 8);
// var carne = new menu('Carne', 15);
// var feijao = new menu('Feijão', 12);
// var brigadeiro = new menu('Macarrão', 8);
 



// let nomePrato = 'Pipoca';
// let tempoPreparo = 10;
// let prepararPrato = (nomePrato, tempoPreparo);

// switch (prepararPrato) {
//     case (menu.nomePrato = nomePrato && tempoPreparo > tempo*2 && tempoPreparo < tempo*3)
//         console.log('Queimou');
//         break;
//     case: (menu = nomePrato && tempoPreparo < tempo)
//         console.log('Tempo insuficiente');
//         break;
//     case: (menu = nomePrato && tempoPreparo > tempo*3)
//         console.log('kabumm');
//         break;
//     case: (menu = nomePrato && tempoPreparo = tempo)
//         console.log('Tempo insuficiente');
//         break;
//     case: (menu = nomePrato && tempoPreparo < tempo)
//         console.log('Tempo insuficiente');
//         break;
//     default: (menu <> nomePrato);
//         console.log('Prato inexistente');
// }

// prepararPrato(nomePrato, tempoPreparo);