//alert com mensagem//
alert('bem vindo ao nosso jogo');
//declaração de variavel = let
//let nome = 'Lua';
//let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;
//alert com mensagem
//alert('Erro! Preencha todos os campos');
//defina uma var mensagemDeErro e atribua a ela o vlr da msg.Agora exiba um alert c o vlr da var mensagemDeErro
let mensagemDeErro = 'Erro! Preencha todos os campos';
//alert(mensagemDeErro)

let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

if (nome === '' || idade=== '' ){
    alert(mensagemDeErro)
}
else if (idade >=18){
    alert('Parabéns, você pode tirar a carteira')

}
else{
    alert('Você não pode tirar a carteira')
}




