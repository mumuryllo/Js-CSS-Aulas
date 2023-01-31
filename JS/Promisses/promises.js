// promise eu te prometo retornar alguma coisa

const numero= document.getElementById('numero')
const btn_promessa= document.getElementById('btn_promessa')

btn_promessa.addEventListener("click",(evento)=>{
    numero.innerHTML="Processando... " 
    promessa()
      // se deu certo
     .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
        })
        // se deu errado
        .catch((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
})

const promessa=()=>{
    let p= new Promise((resolve,reject)=>{
        let resultado=true
        let tempo=3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo Certo")
            }else{
                reject("Deu tudo Errado")
            }
        },tempo)
    })
    return p
}


numero.innerHTML="Esperando... "