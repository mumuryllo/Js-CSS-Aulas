// Repetições Definidas - For
// Enquanto for verdadeiro ele vai executar o loop

for(let i=0; i<100; i++){
   if(i%2== 0){
    console.log(i+ " é PAR")
   }else{
    console.log(i+ " é IMPAR")
   }
}

// For in
let num=[10,20,30,40,50]

for(n in num){
    console.log(num[n])
}
// For of imprime diretamwente os elementos
for(n of num){
    console.log(n)
}