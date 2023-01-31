// API de Teste

// Método GET
fetch('https://reqres.in/api/users?page=2').then((resposta) =>
    // converter pra JSON
    resposta.json()
)
    .then(data => console.log(data.data))

    // Método POST
fetch('https://reqres.in/api/users',{
method:"POST", 
headers:{
    "Content-Type": "application/json",
},
body:JSON.stringify({name:"Muryllo"}),
})
.then((resposta) =>resposta.json()
)
.then(data => console.log(data))