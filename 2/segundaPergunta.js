
/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre
será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa
na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma
mensagem avisando se o número informado pertence ou não a sequência.
*/

function pertenceFibonacci(num) {
    let a = 0, b = 1;

    // Caso o número seja 0 ou 1, já pertence à sequência
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    // Gera a sequência de Fibonacci até que o número seja maior ou igual ao número informado
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    // Verifica se o número informado pertence à sequência
    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 21;
console.log(pertenceFibonacci(numero));

/*resposta: 
Para numero = 21, o programa retornará: O número 21 pertence à sequência de Fibonacci.
Para numero = 22, o programa retornará: O número 22 não pertence à sequência de Fibonacci.
*/ 