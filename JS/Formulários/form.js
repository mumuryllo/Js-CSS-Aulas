console.log(document.forms[0].usuario)
console.log(document.forms[0].usuario.value)
console.log(document.forms['frm_login'])
console.log(document.forms.frm_login.usuario.value)

// evento focus quando clicamos e o elemento fica selecionado
// blur é quando clica em outro elemento e perde o focus

let usuario = document.querySelector('[name="usuario"]')
let senha = document.querySelector('[name="senha"]')
let tarefa = document.querySelector('[name="tarefa"]')
let duracao = document.querySelector('[name="duracao"]')

// focus 
usuario.addEventListener("focus", (evento)=>{
 evento.target.classList.add('focus')
})

// blur
usuario.addEventListener("blur", (evento)=>{
    evento.target.classList.remove('focus')
    if(usuario.value == "Muryllo"){
        console.log("ok!")
    }
   })

   senha.addEventListener("focus", (evento)=>{
    evento.target.classList.add('focus')
   })
   
   senha.addEventListener("blur", (evento)=>{
       evento.target.classList.remove('focus')
      })

      // change
      tarefa.addEventListener('change',()=>{
        console.log('alterado')
      })
      duracao.addEventListener('change',()=>{
        console.log('alterado select')
      })


       // input
       tarefa.addEventListener('input',()=>{
        console.log('introduzido')
      })
      
      // cut botao direito do mouse evento
      tarefa.addEventListener('cut',()=>{
        console.log('cortado')
      })
      

      // copy botao direito do mouse evento

      tarefa.addEventListener('copy',()=>{
        console.log('copiado')
      })

      // paste botao direito do mouse evento
      tarefa.addEventListener('paste',()=>{
        console.log('colado')
      })

      let formulario= document.querySelector('#formulario')
      formulario.addEventListener('submit',(evento)=>{
        console.log('enviado!')

        // efetuar verificações e validações


        // caso contrário preventDefault
        evento.preventDefault()
      })
