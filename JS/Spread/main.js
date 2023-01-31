/* Spread vai pegar um conjunto de elemtos e devolver elemento
a elemento
HTMLCollection - eu só posso pegar elementos HTML
Já com spread eu posso pegar o array de elementos html e
acrescentar mais coisas
*/
let n1=[10,20,30]
let n2=[22,33,44,55,66]
let n3=[...n1,n2]

const jogador1={nome:"Muryllo",energia: 150, vidas:3,magia:200}
const jogador2={nome:"Gabriel",energia: 150, vidas:2,velocidade:70}
const jogador3={...jogador1,jogador2}

console.log(n3)
console.log(jogador3)

const objs=document.getElementsByTagName('div')
const objs2=[...document.getElementsByTagName('div')]

console.log(objs)
console.log(objs2)