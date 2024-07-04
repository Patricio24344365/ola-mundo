let primeironome ='João'
 
 console.log(primeironome)
 
 let a =5 , b=10, soma = a+b
 
 console.log(soma)
 
 let primeiroNome = 'Josefa' , ultimoNome = 'Silva', junta = primeiroNome+ultimoNome
 
 console.log(junta)
 
let pessoa = {nome: 'Josefa',idade:15,endereço:'oi', telefone:8767868}

console.log(pessoa)

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
console.log(frutas);

let numeros = [1, 2, 3, 4, 5];

let primeiroElemento = numeros[0];
let ultimoElemento = numeros[numeros.length - 1];

console.log("Primeiro elemento:", primeiroElemento);
console.log("Último elemento:", ultimoElemento);

let cores = ["vermelho", "verde", "azul"];

for (let i = 0; i < cores.length; i++) 
    console.log(cores[i])
    
    let idade = 20; // você pode alterar este valor para testar diferentes cenários

if (idade >= 18) 
    console.log("Maior de idade")
 else 
    console.log("Menor de idade")
    
    let nota = 6.5; // você pode alterar este valor para testar diferentes cenários

if (nota >= 7) 
    console.log("Aprovado");
 else if (nota >= 5 && nota < 7) 
   console.log("Recuperação")
else
    console.log('Reprovado')
    
    switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido");
        break;
        
        for (let i = 1; i <= 10; i++) {
    console.log(i);
    
    let contador = 1;

// Use um loop while para exibir os números de 1 a 5 no console
while (contador <= 5) {
    console.log(contador);
    contador++; // Incrementa o valor da variável contador a cada iteração
   
   let numero = 0;

// Use um loop do...while para exibir o valor de numero no console
// e incrementá-lo até que seja menor que 3
 do {
    console.log(numero);
    numero++; // Incrementa o valor de numero a cada iteração
} while (numero < 3);

let valores = [10, 20, 30, 40, 50];

// Inicialize uma variável para armazenar a soma dos elementos
let soma = 0;

// Use um loop for para calcular a soma de todos os elementos do vetor
for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
}

// Exiba o resultado da soma no console
console.log("A soma dos elementos do vetor é:", soma);

let numeros = [12, 5, 23, 8, 15, 19];

// Declare uma variável para armazenar o número máximo
let maximo = numeros[0]; // Inicializa com o primeiro elemento do vetor

// Use um loop for para encontrar o maior número do vetor
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i]; // Atualiza o valor de maximo se encontrar um número maior
    }
}

// Exiba o número máximo no console
console.log("O maior número no vetor é:", maximo);

let numeros = [12, 5, 23, 8, 15, 19];

// Declare uma variável para armazenar o número mínimo
let minimo = numeros[0]; // Inicializa com o primeiro elemento do vetor

// Use um loop for para encontrar o menor número do vetor
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
        minimo = numeros[i]; // Atualiza o valor de minimo se encontrar um número menor
    }
}

// Exiba o número mínimo no console
console.log("O menor número no vetor é:", minimo);

let n = 5; // Exemplo: calcular o fatorial de 5

// Verificação básica para números negativos
if (n < 0) {
    console.log("O fatorial não está definido para números negativos.");
} else {
    // Inicialize uma variável para armazenar o resultado do fatorial
    let fatorial = 1;

    // Use um loop for para calcular o fatorial de n
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }

    // Exiba o resultado do fatorial no console
    console.log(`O fatorial de ${n} é:`, fatorial);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use um loop for e uma estrutura condicional para exibir quais números são pares e quais são ímpares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + " é par");
    } else {
        console.log(numeros[i] + " é ímpar");
    }
    
    let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

// Inicialize uma variável para contar as vogais
let countVogais = 0;

// Converta o texto para minúsculas para simplificar a verificação
texto = texto.toLowerCase();

// Use um loop for para percorrer cada caractere da string
for (let i = 0; i < texto.length; i++) {
    // Verifique se o caractere atual é uma vogal
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        countVogais++;
    }
}

// Exiba o resultado da contagem de vogais no console
console.log("O número de vogais na string é:", countVogais);

let texto = "Hello, world!";

// Inicialize uma variável para armazenar a string invertida
let textoInvertido = "";

// Use um loop for para inverter a string
for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

// Exiba o resultado da string invertida no console
console.log("String original:", texto);
console.log("String invertida:", textoInvertido);

let inicio = 10;
let fim = 50;

// Use um loop for para iterar através dos números no intervalo
for (let num = inicio; num <= fim; num++) {
    let primo = true;

    // Verifica se o número atual é primo
    if (num === 1) {
        primo = false;
    } else if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primo = false;
                break;
            }
        }
    }

    // Se o número for primo, exibe-o no console
    if (primo) {
        console.log(num);
        
        
    
    