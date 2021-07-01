let bottom = document.getElementById('buttom');  /**tomando el valor de los nodos */
let espacio = document.getElementById('vacio');
let numeros = 10;
let numero_aleatorios;
let contador=0;

var boton_nuevo = false;

bottom.addEventListener('click',()=>{
    boton_nuevo = true;
    var arreglo = [];
    var i;
    contador +=1;

    for( i = 0; i<numeros; i++){

        let numeros_generados = parseInt((numero_aleatorios = Math.random() * 100));
        arreglo.push(numeros_generados);
    }

    espacio.innerHTML += arreglo;
});

