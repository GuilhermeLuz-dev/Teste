let valorPorEstado = [
    { nome: "SP", valor: 67836.43 },
    { nome: "RJ", valor: 36678.66 },
    { nome: "MG", valor: 29229.88 },
    { nome: "ES", valor: 27165.48 },
    { nome: "outros", valor: 19849.53 },
];



function calcularPercentualEstado() {
    let valorTotal = calcValorTotal(valorPorEstado);

    valorPorEstado.forEach(element => {
        console.log(element.nome + " " + element.valor / valorTotal * 100 + "%");
    })
    


}

function calcValorTotal(valorPorEstado) {
    let valor = 0;
    for (let i = 0; i < valorPorEstado.length; i++){
        valor += valorPorEstado[i].valor;
    }
    return valor;
}

calcularPercentualEstado();

