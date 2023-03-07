var menu = document.querySelectorAll('.opcion');

menu.forEach(function(ítem){
    ítem.addEventListener('click',function(i){
         var elemento = i.target.parentNode;
         console.log(elemento.children);
         elemento.children[1].classList.toggle('activo');
    })
})