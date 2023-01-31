let nome = new String("Muryllo Soares 2000")
let email ="muryllo@gmail.com.br"
console.log(nome)

// search 
// significa que n vai usar case sensitive
console.log(nome.search(/soares/i))

console.log(nome.match(/o/ig))

console.log(nome.replace("Soares","Teste"))

// encontrar caracteres ate determinada letra
console.log(nome.match(/[a-s | 0-9]/ig))

// retorna só digitos numericos
console.log(nome.match(/\d/ig))

// retorna só espaços
console.log(nome.match(/\s/ig))

// retorna só letras
console.log(nome.match(/\bM/ig))

// Quantificadores
console.log(nome.match(/o+|s+/ig))
