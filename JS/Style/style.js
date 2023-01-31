let p= document.querySelector('p')
p.style.backgroundColor = 'Darkblue'
p.style.border = '1px solid red'
p.style.borderWidth = '10px'

// localização e dimensões do elementos HTML

function buscar_propriedades(){
    let div = document.querySelector('div')
    let p1= document.querySelector('#propriedades')
    
    let resultados= ""
    
    // offsetLet é a distancia da parte esquerda do inicio do elememto
    resultados += "offsetLeft = " + div.offsetLeft + " "

    p1.textContent = resultados

}