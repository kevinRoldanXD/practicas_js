var header = document.getElementById('header');
var h1 = document.getElementById('h1');

var boton1 = document.getElementById('1');
var boton2 = document.getElementById('2');
var boton3 = document.getElementById('3');

boton1.addEventListener('click', ()=>{
    header.style.backgroundImage = 'url(../image/1.jpg)';
    h1.style.color = 'white';
});

boton2.addEventListener('click',()=>{
    header.style.backgroundImage = 'url(../image/2.jpg)';
    h1.style.color = '#7fffd4';
});

boton3.addEventListener('click',()=>{
    let respuesta = window.confirm("en estos momentos no tenemos imagen para este boton,quiere continuar?");
    if(respuesta){
        header.style.backgroundImage = 'url(../image/1.jpg)';
    }else
        if(respuesta != true){
            header.style.backgroundColor = '#000000';
            h1.style.color = '#ffffff';
    }
});
