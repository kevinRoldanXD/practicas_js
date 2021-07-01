let num = document.getElementById('input');
let num2 = document.getElementById('input2');
let buttom = document.getElementById('buttom');

buttom.addEventListener('click',()=>{
    if(num.value > num2.value){
        alert('el valor del primer input es mayor');
    }else{
        alert('el valor del segundo input es mayor');
    }
});
