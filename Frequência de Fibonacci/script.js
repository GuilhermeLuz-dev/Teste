let numInformado = 13;
let aux1 = 0;
let aux2 = 1;
let numeroEncontrado = false;

function calcSeqFibonacci() {
    while(!numeroEncontrado) {
         
        aux1 = aux1 + aux2;
        aux2 = aux1 + aux2;
        
        if (aux1 == numInformado || aux2 == numInformado) {
            numeroEncontrado = true;
            console.log(`O número ${numInformado} pertence a sequência de Fibonacci.`);
            
        } else if (aux1 > numInformado || aux2 > numInformado) {
            numeroEncontrado = true;
            console.log(`O número ${numInformado} não pertence a sequência de Fibonacci`);
        }

       
    }
}

calcSeqFibonacci()