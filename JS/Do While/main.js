// Enquanto for verdadeiro - while situações indefinidas


let n=5
let fatorial = 1

while(n>=1){
    fatorial *=n
    n--
}
console.log(fatorial)

// Do while Faça no final executa o while e executa pelo menos uma vez

let numero=10

do {
   console.log("Olá")
   numero ++ 
} while (numero<10);