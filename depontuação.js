let pontuacao = 0;
let motivadora = 'Você errou, continue o jogo!';
let ask1 = prompt('Em que ano o Instituto Caldeira foi fundado? A-2024 B-2020');
ask1 = ask1.toUpperCase();

if (ask1 == 'B'){
    pontuacao += 25;
    alert(`Pontuação atual ${pontuacao} .Continue assim! `);
    
} 
else{
    alert(motivadora);
}

let ask2 = prompt('Qual o emoji da trilha de python? A-Cobra B-Mosquito');
ask2 = ask2.toUpperCase();

if (ask2 == 'A'){
    pontuacao += 25;
    alert(`Pontuação atual ${pontuacao} .Continue assim! `);

}
else{
    alert(motivadora);
}

let ask3 = prompt('Qual a cor predominante no feed do Geração Caldeira A-Verde e Rosa B-Verde e Azul');
ask3 = ask3.toUpperCase();

if (ask3 == 'B'){
    pontuacao += 25;
    alert(`Pontuação atual ${pontuacao} .Continue assim! `);

}
else{
    alert(motivadora);
}

let ask4 = prompt('Quem é o facilitador da trilha de python? A-Otavio B-Alicia');
ask4 = ask4.toUpperCase();
if (ask4 == 'B'){
    pontuacao += 25;
    alert(`Pontuação atual ${pontuacao} .Continue assim! `);

}
else{
    alert(motivadora);
}


if (pontuacao == 100){
    alert('DALE! Você arrasa!');
}else{
    alert('Não foi dessa vez que você venceu, tente novamente');
}
