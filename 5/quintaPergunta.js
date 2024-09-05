/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Função para inverter uma string
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Exemplo de uso com string definida
const stringDefinida = 'Exemplo de string';
console.log('String original:', stringDefinida);
console.log('String invertida:', inverterString(stringDefinida));
/*
resposta:
String original: Exemplo de string
String invertida: gnirts ed olpmexE
 */