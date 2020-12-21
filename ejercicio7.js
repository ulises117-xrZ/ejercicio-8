let nota = document.getElementById('nota').value;
let boton = document.querySelector('.boton');
const div = document.querySelector('.otor');
const fragment = document.createDocumentFragment();
let p = document.createElement('p');
fragment.appendChild(p)
div.appendChild(fragment);
boton.addEventListener('click',()=>{
    if (nota >=7){
        p.innerHTML = "APROBADO"
        div.classList.add('letsi')
    } else if(nota<=6){
        p.innerHTML = "REPROBADO"
        div.classList.add('wrong');
    }
})

