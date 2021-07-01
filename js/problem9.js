/*
Diseñe un Algoritmo que lea 3 longitudes y determine si forman o no un triángulo. Si es un triángulo determine de qué tipo de triángulo  se trata entre: Equilátero (si tiene 3 lados iguales), Isósceles (si tiene 2 lados iguales) o Escaleno (si tiene 3 lados desiguales). Considere que para formar un triángulo se requiere que: “el lado mayor sea menor que la suma de los otros dos lados”.
*/
let lado1;
let lado2;
let lado3;

let equilatero = 'equilatero';
let isoseles = 'isoseles';
let escaleno = 'escaleno';

lado1 = parseInt(prompt('ingrese el lado1: '));
lado2 = parseInt(prompt('ingrese el lado2: '));
lado3 = parseInt(prompt('ingrese el lado3: '));

if(lado1 == lado2 && lado2 == lado3){
    alert(`segun los lados este es un triangulo: ${equilatero}`);
}else
    if(lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado3 != lado2 || lado2 == lado1 && lado1 !=lado3 ||lado2 == lado3 && lado3 != lado1 || lado3 == lado1 && lado1 != lado2 || lado3 == lado2 && lado2 != lado1){
        alert(`despues de esta larga comprobacion hemos determinado que el triangulo es: ${isoseles}`);

}else
    if(lado1 != lado2 && lado2 != lado3 || lado1 != lado3 && lado3 != lado2 || lado2 != lado1 && lado1 != lado3 || lado2 != lado3 && lado3 != lado1 || lado3 != lado1 && lado3 != lado2 || lado3 != lado2 && lado2 != lado1){
        alert(`despues de esta comprovacion del diablo hemos determinado que el triangulo es: ${escaleno}`);
}else{
    alert(`seguro la has cagado ajajajajaj`);
}
