let elemento = document.querySelector('h3')

// hasAtributte - se o elemento esta atribuido

if(elemento.hasAttribute('id')){
    console.log('sim')
}
// getAtribbute
console.log(elemento.getAttribute('id'))
// setAtribbute
elemento.setAttribute('title','Título do sumario')

function executar(){
 // criando elemento
let novo_elemento = document.createElement('p')
novo_elemento.className = 'alerta';
novo_elemento.innerText = "Esta é uma mensagem de alerta"

let elemento2 = document.querySelector('.caixa')
elemento2.appendChild(novo_elemento)
}

// before, after ,prepend - dentro da div no  inicio, apeend - dentro da div no fim

let div = document.querySelector('.container')
div.before('AAA')
div.prepend('bbb')
div.after('ccc')
div.append('ddd')