//Haga el Algoritmo en Pseudocódigo que dada una variable cuyo valor es leído desde teclado, imprima por pantalla si el número  es o no es mayor que 0 y si el número es par o impar. 

let numero;
numero = parseInt(prompt('ingrese un nuemero: '));

if(numero <= 0){
    alert('el numero igual o menor');
}

if(numero > 0){
    alert('vamos a comprovar si es par o inpar');
    if(numero % 2 == 0){
        document.write('el numero es par');
    }else{
        document.write('el numero no es par');
    }
}