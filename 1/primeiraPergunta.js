
/* 
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
 */

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

/*resposta: 
O laço Enquanto K < INDICE se repetirá até que K seja menor que 13. 
A cada iteração, o valor de K será incrementado em 1, e o valor de K será somado à variável SOMA

 K = 1, SOMA = 0 + 1 = 1
 K = 2, SOMA = 1 + 2 = 3
 K = 3, SOMA = 3 + 3 = 6
 K = 4, SOMA = 6 + 4 = 10
 K = 5, SOMA = 10 + 5 = 15
 K = 6, SOMA = 15 + 6 = 21
 K = 7, SOMA = 21 + 7 = 28
 K = 8, SOMA = 28 + 8 = 36
 K = 9, SOMA = 36 + 9 = 45
 K = 10, SOMA = 45 + 10 = 55
 K = 11, SOMA = 55 + 11 = 66
 K = 12, SOMA = 66 + 12 = 78
 K = 13, SOMA = 78 + 13 = 91
No final do preocessamento o valor da variavel soma sera = 91.
*/


