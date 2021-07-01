//      Diseñe un Algoritmo que califique el puntaje obtenido en el lanzamiento de tres dados en función a la cantidad de seis obtenidos, de acuerdo a lo siguiente:
/*
• Seis en los tres dados, excelente.
• Seis en dos dados, Muy Bien.
• Seis en un dado, Regular.
• Ningún seis, Pésimo.
*/

let dado1;
let dado2;
let dado3;

dado1 = parseInt(prompt('ingrese elvalor del dado  1: '));
dado2 = parseInt(prompt('ingrese el valor del dado 2: '));
dado3 = parseInt(prompt('ingresa el valor del dado 3: '));

if(dado1 == 6 && dado2 == 6 && dado3 == 6){
    alert('exelente!');
}else
    if(dado1 == 6 && dado2 == 6 && dado3 != 6){
        alert('muy bien!');
        
}else
    if(dado1 == 6 && dado2 != 6 && dado3 != 6){
        alert('regular');

}else
    if(dado1 != 6 && dado2 != 6 && dado3 != 6){
        alert('pesimo');
}else{
    alert('el numero que ingresaste no esta en los dados');
}