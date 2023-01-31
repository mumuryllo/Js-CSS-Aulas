//1- inserir dados
// primeiro a chave e depois o item
localStorage.setItem("name","Muryllo")

// 2- restart sem perder dados


// 3 - resgatar dados
const name = localStorage.getItem("name")
console.log(name)

// 4 - resgate de item que não existe
const lastName =localStorage.getItem("lastname")
console.log(lastName)

if(!lastName){
    console.log("Sem sobrenome!")
}

// 5- remover item
localStorage.removeItem("name")

// 6- limpar todos os itens
localStorage.setItem("a",1);
localStorage.setItem("b",2);
localStorage.clear();

// Session storage
sessionStorage.setItem("number",123)

// 1- reiniciar e perder dados
const n = sessionStorage.getItem("number")
console.log(n)

// sessionStorage.removeItem("number");
// sessionStorage.clear()

// Salvar objeto

const pessoa={
    nome:"Muryllo",
    idade:23,
    profissao:"Programador",
}

// converter o objeto pra JSON
localStorage.setItem("pessoa",JSON.stringify(pessoa))

// pegar o objeto
const getPessoa= localStorage.getItem("pessoa");
const pessoaObjeto = JSON.parse(getPessoa)

console.log(pessoaObjeto.profissao)