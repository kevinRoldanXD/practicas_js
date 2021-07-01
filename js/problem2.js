//Realice un Algoritmo que permita leer de un registro el nombre de un empleado, el salario básico por hora y el número de horas trabajadas durante una semana. Calcular el salario neto, teniendo en cuenta que si el número de horas trabajadas durante la semana es mayor de 48, esas horas demás se consideran horas extras y tienen un 35 % de recargo. Imprima el nombre del empleado y el salario neto.

let nombre;
let salario_basico;
let salario_neto;
let num_horas;

nombre = prompt('ingrese el nombre del empleado: ');
salario_basico = parseInt(prompt('ingrese el salario basico: '));
num_horas = parseInt(prompt('ingrese el numerode horas trabajadas: '));

if(num_horas > 48){
    salario_neto = salario_basico += 0.35;
    document.write(`<h1>tuviste un buen desempeño: ${nombre} tu salario neto es: ${salario_neto}</h1>`);
}else{
    document.write(`tu nombre es: ${nombre} y tu salario basico es: ${salario_basico}`);
}