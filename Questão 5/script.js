let texto = "Texto a ser invertido";

function inverterString(string){
    let textoInvertido = '';

    for(let i = string.length - 1; i >= 0; i--){
        textoInvertido += string[i];
    }
    
    console.log(textoInvertido);

}

inverterString(texto);