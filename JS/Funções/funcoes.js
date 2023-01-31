// Cruiando a função
function mudarTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")
    d1.innerHTML= "Seja Bem Vindo!"
    d2.innerHTML= "Seja Bem Vindo!"
    d3.innerHTML= "Seja Bem Vindo!"
}
// chamada da função

// mudarTexto()

// funções com parametros

function soma(n1,n2){
    return n1+n2
}
console.log(soma(10,5))

// funções REST
function somaValores(...valores){
    let tamanho= valores.length
    let res=0
    for(let i=0; i<tamanho;i++){
        res+=valores[i]
    }
    return res
}
console.log(somaValores(10,5,30,40,50))