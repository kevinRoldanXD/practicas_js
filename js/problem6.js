//11)  Construir un Algoritmo que lea la categoría y el sueldo de un trabajador, calcule el aumento correspondiente teniendo en cuenta la siguiente tabla:

let categoría;
let sueldo;
let aumento;

categoría = parseInt(prompt('ingresa tu categoria:'));
sueldo = parseInt(prompt('ingrese su salario: '));

if(categoría > 0 && categoría < 5){

    if(categoría == 1){
        aumento = sueldo += 0.15;

    }else if(categoría == 2){
        aumento = sueldo += 0.10;

    }else if(categoría == 3){
        aumento = sueldo += 0.8;

    }else if(categoría == 4){
        aumento = sueldo += 0.7;
    }

}

document.write(`<h1>su categoria es: ${categoría} y su salario neto es: ${aumento} </h1>`);