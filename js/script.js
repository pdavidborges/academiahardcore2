//Seleção de DOM
//console.log('Olá turma');


//Selecionando o "botão do menu"
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

function controlMenu(){
    //alert('Função acionada');
    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}


btnMenu.addEventListener('click',controlMenu);
menu.addEventListener('click',controlMenu);