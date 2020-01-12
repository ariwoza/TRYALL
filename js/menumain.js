var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});

let itemNav = document.querySelectorAll('.menu-icon')

for (let i = 0; i < itemNav.length; i++) {
  itemNav[i].addEventListener('click', () => {
    nav.classList.toggle('mostrar');
  })
  
  
}