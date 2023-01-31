// função map percorre arrays, percorrer coleções inteiras


// let c= cursos.map((elemento,indice)=>{
//     return "<div>" + elemento +"</div>"
// })

// console.log(c)


// const el =document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

// const converterInt=(e)=>parseInt(e)
// let num =['1','2','3','4','5'].map(converterInt)
// console.log(num)

const caixa1=document.querySelector(".caixa1")



const cursos=['HTML','CSS','JavaScript','PHP','React']




cursos.map((el)=>{
let p = document.createElement("p")
p.innerHTML=el
caixa1.appendChild(p)
})

