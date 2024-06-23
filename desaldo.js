alert('Bem vindo a sua conta!')

let deposito = prompt('Faça seu deposito');
deposito =0;

if (deposito == 0){
    alert('Não há saldo em conta.');
}
else{
    
    alert(`Seu saldo em conta é R$ ${deposito}`);
}