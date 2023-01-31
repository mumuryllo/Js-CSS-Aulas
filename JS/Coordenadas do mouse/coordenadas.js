document.querySelector('div').addEventListener('mousemove',()=>{

    // PageX e PageY são as coordenadas e vc pode fazer infinitas
    // coisas com os eventos

   if(event.pageX >=600) {
        event.target.style.backgroundColor = 'darkblue'
        event.target.style.color = "yellow"
    }  else {
        event.target.style.backgroundColor = 'pink'
        event.target.style.color = "red"
    }
})