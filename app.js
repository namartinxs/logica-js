alert('Bem-Vindo ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto numeroSecreto nao for igual ao chute
while (numeroSecreto  != chute){
    chute = prompt('Escolha um número entre 1 e 100');
    //numero secreto e chute são iguais
    if (numeroSecreto == chute){
        break;
    } else{
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas> 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);    




