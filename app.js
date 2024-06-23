alert('Bem-Vindo ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto)

let chute = prompt('Escolha um número entre 1 e 30');
console.log('Valor da tentativa', chute);

console.log('Comparação entre tentativa e número secreto' ,chute==numeroSecreto)
if (numeroSecreto == chute){
    //template strings são feitas com crase
   alert(`Parabéns você acertou o número secreto ${numeroSecreto}`)
}
else{
    alert('Você errou :( O número secreto era'  + numeroSecreto +  'Tente outra vez!')
}

é