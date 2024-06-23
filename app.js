alert('Bem-Vindo ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto numeroSecreto nao for igual ao chute
while (numeroSecreto  != chute){
    chute = prompt('Escolha um número entre 1 e 30');
    //numero secreto e chute são iguais
    if (numeroSecreto == chute){
    //template strings são feitas com crase
        alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas++;
    }
}


