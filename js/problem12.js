let entrada = document.getElementById('input');
let buttom = document.getElementById('buttom');
let parrafo = document.getElementById('parrafo');

buttom.addEventListener('click',()=>{
   parrafo.innerHTML += `  ${entrada.value}`; 
});