
/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser 
ignorados no cálculo da média;
*/

const faturamentoMensal = [
    { "dia": 1, "faturamento": 22174.1664 },
    { "dia": 2, "faturamento": 24537.6698 },
    { "dia": 3, "faturamento": 26139.6134 },
    { "dia": 4, "faturamento": 0.0 },
    { "dia": 5, "faturamento": 0.0 },
    { "dia": 6, "faturamento": 26742.6612 },
    { "dia": 7, "faturamento": 0.0 },
    { "dia": 8, "faturamento": 42889.2258 },
    { "dia": 9, "faturamento": 46251.174 },
    { "dia": 10, "faturamento": 11191.4722 },
    { "dia": 11, "faturamento": 0.0 },
    { "dia": 12, "faturamento": 0.0 },
    { "dia": 13, "faturamento": 3847.4823 },
    { "dia": 14, "faturamento": 373.7838 },
    { "dia": 15, "faturamento": 2659.7563 }
];

function analisarFaturamento(faturamentoMensal) {
    // Filtrando os dias sem faturamento (considerando valores > 0)
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);

    // Calculando o menor e o maior faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));

    // Calculando a soma do faturamento
    const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.faturamento, 0);

    // Calculando a média mensal de faturamento
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Contando os dias com faturamento acima da média mensal
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Chamando a função e exibindo os resultados
const resultado = analisarFaturamento(faturamentoMensal);

console.log(`Menor faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);

//nota: Dias sem faturamento (0.0) são ignorados no cálculo da média e na contagem dos dias com faturamento acima da média.
/*
resposta:
Menor faturamento: R$ 373.78
Maior faturamento: R$ 46251.17
Dias com faturamento acima da média: 5
*/

