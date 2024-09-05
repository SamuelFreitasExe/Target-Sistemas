/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação
 que cada estado teve dentro do valor total mensal da distribuidora.  
 */

// Dados de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de representação
function calcularPercentual(faturamentoPorEstado) {
    // Calcula o faturamento total
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    // Calcula o percentual de cada estado
    const percentualPorEstado = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentualPorEstado[estado] = percentual.toFixed(2); // Formata para duas casas decimais
    }

    return percentualPorEstado;
}

// Calcula e exibe o percentual
const percentual = calcularPercentual(faturamentoPorEstado);

console.log("Percentual de representação por estado:");
for (const estado in percentual) {
    console.log(`${estado}: ${percentual[estado]}%`);
}
/*
resposta:
Percentual de representação por estado:
SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%
 */