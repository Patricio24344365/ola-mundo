function soma(n1, n2) {
    let soma = n1 + n2
    return soma
}

console.log(soma(2,3))

let senhaCorreta = "batatasalgada"

function comparaSenha(senhaCorreta, senhaEscrita){
     if(senhaEscrita == senhaCorreta){
        console.log('Conectado')
    } else {
        console.log('Senha Incorreta')
    }
}

comparaSenha(senhaCorreta, 'morango')
comparaSenha(senhaCorreta, 'batatasalgada')

//primeiro exercício:

function fatorial (n) {
    let resposta = 1
   for (let i=1; 1< n;i++){
         resposta = resposta * i
   }
   return resposta
}
let n = fatorial(10)
console.log('O fatorial de 5 é', n);

//segundo exercício:

function ehPar(n){
    if(n % 2 == 0){
        console.log(n, 'é par');
    } else {
        console.log(n, 'é ímpar');
    }
}
ehPar(4)