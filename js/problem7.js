// Desarrolle un Algoritmo que permita leer una nota comprendida entre 1 y 20; Para convertir dichas calificaciones numéricas, según las siguientes indicaciones: A= 19 y 20, B=16, 17 y 18, C= 13, 14 y 15, D= 10, 11 y 12; y E= 1 a 9. Mostrar la nota transformada.

let numero;

numero = parseInt(prompt('ingresa la nota numerica para ver cuanto sacaste: '));

if(numero < 0 && numero > 20){
    alert('debes ingresar una nota comprendida entre 0 y 20: ');
    numero = parseInt(prompt('ingrese su nota nuevamente: '));
}

if(numero == 19 || numero == 20){
    alert('has sacado una A, felicidades');

}else
    if(numero == 16 || numero == 17 || numero == 18){
        alert('te has sacado una B, felicidades');

}else
    if(numero == 13 || numero == 14 || numero == 15){
        alert('te has sacado una c, aun puedes mejorar :)');
    }
else
    if(numero == 10 || numero == 11 || numero == 12){
        alert('verga casi repruebas te has sacado una D');
    }
else
    if(numero == 0 || numero > 0 && numero < 10){
        alert('has reprobado te sacaste una E por pelotudo jeje');
    }

else{
alert('seguro la has cagado');
}