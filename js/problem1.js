//Realice un Algoritmo que permita realizar la siguiente operación: Para un salario bruto hasta de 1500 $, no hay retención. Para un salario bruto de 1500 $ a 3000 $ el porcentaje de retención es de 5 %. Para un salario bruto mayor de 3000 $ el porcentaje de retención es de 8 %. Mostrar el nombre del empleado, el salario bruto, el valor de la retención y el salario neto. Se debe leer el nombre y el salario bruto por teclado.

let nombre;
let salario_bruto;
let salario_neto;
let retencion;

nombre = prompt('ingrese el nombre del trabajador: ');
salario_bruto = parseInt(prompt('ingrese el salaio bruto del trabajador: '));

if(salario_bruto <= 1500){
    alert('no hay retencion');

}else

if(salario_bruto > 1500 && salario_bruto <= 3000){
    retencion = 0.50;
    salario_neto = salario_bruto * retencion;

}else
    if(salario_bruto > 3000){
    retencion = 0.80;
    salario_neto = salario_bruto * retencion;
    }

else{
    alert('ingresa un salario o nombre correcto');
}

document.write(`<h1> nombre: ${nombre} salario bruto: ${salario_bruto} retencion: ${retencion} salario neto: ${salario_neto}</h1>`);