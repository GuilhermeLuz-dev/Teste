


fetch("dados.json").then((object) => {
    object.json().then(dados => {
        
        menorValor(dados);
        maiorValor(dados);
        diasSuperioresMediaMensal(dados)

    })
})

function menorValor(dados) {
    let menorValor = dados[0].valor;

    for (let i = 0; i < dados.length; i++) {

        if (menorValor > dados[i].valor && dados[i].valor != 0) {
            menorValor = dados[i].valor;
        }
    }
    console.log("O menor valor é " + menorValor)
}

function maiorValor(dados) {
    let maiorValor = dados[0].valor;

    for (let i = 0; i < dados.length; i++) {

        if (maiorValor < dados[i].valor && dados[i].valor != 0) {
            maiorValor = dados[i].valor;
        }
    }
    console.log("O maior valor é " + maiorValor)
}

function diasSuperioresMediaMensal(dados) { 
    
    let diasAcimaDaMedia = [];
    dados.forEach(dado =>{
        
        if(dado.valor > somarMedia(diasComFatura(dados))){
            diasAcimaDaMedia.push(dado.dia)
        }
    })
   
    console.log("Os dias acima da média foram: ")
    for(let dia of diasAcimaDaMedia){
        console.log(dia)
    }

}

function diasComFatura(dados) { 
    let diasFatura = [];
    dados.forEach(dado => {
        if (dado.valor != 0) {
            diasFatura.push(dado)
        }
    })
    return diasFatura;
}

function somarMedia(dias) {

    let somaValores = 0

    for (let soma of dias) {
        somaValores += soma.valor
    }

    return somaValores / dias.length
}

