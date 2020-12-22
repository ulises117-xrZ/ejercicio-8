let nota = document.getElementById('nota');
let boton = document.querySelector('.boton');
const div = document.querySelector('.otor');
const fragment = document.createDocumentFragment();
let p = document.createElement('p');
fragment.appendChild(p)
div.appendChild(fragment);
boton.addEventListener('click',()=>{
    if (nota.value >=7){
        p.innerHTML = "APROBADO"
        div.classList.remove('wrong')
        div.classList.add('letsi')
    } else if(nota.value<=6){
        p.innerHTML = "REPROBADO"
        div.classList.remove('letsi')
        div.classList.add('wrong');
    }
})



