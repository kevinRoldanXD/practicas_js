
 //   8) Realice un Algoritmo que permita ingresar  por teclado el nombre, la edad y el sexo de cualquier persona e imprima, solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona. Nota: Suponga que en el campo denominado sexo el número 1 es de masculino y el número 2 es femenino.

 let nombre;
 let edad;
 let sexo;

 nombre = prompt('ingresa tu nombre: ');
 edad = parseInt(prompt('ingresa tu edad: '));
 sexo = prompt('ingresa tu sexo: ');

 if(sexo == 'masculino' && edad > 18){
     document.write(`hola seguro tu nombre es: ${nombre}`);

 }else{
    document.write('seguro ers niña');
 }
