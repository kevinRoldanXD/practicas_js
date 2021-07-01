//Haga un algoritmo que permita Ingresar por teclado el nombre, la edad, el sexo (1 o 2) y el estado civil de cualquier persona e imprima solo si la persona es un hombre soltero mayor de edad, el nombre de la persona. Nota: en el campo de estado civil se graba el número 1 en vez de soltero, el número 2 en vez de casado o el número 3 en vez de otros.

let nombre = prompt('ingrese su nombre: ');
let edad = parseInt(prompt('ingrese su edad: '));
let sexo = prompt('ingrese su sexo 1:masculino y 2:FEMENINO: ');
let civil =prompt('ingrese su estado civil 1:SOLTERO 2:CASADO Y 3:OTRO');

if(sexo == '1' && civil=='1' && edad >= 18){
    document.write(`hola ${nombre} ya se procesaron tus datos.`);
}else{
    document.write(`enestos momentos no podemos procesar tus datos`);
}