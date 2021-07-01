var uno = document.getElementById('1');    // declaracion y obtencion de nodos
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var buttom = document.getElementById('buttom');

var primer_opcion = false;   // inicializando el estado de las variables 
var segunda_opcion = false;
var tercera_opcion = false;

uno.addEventListener('click',()=>{   // funciones que permiten cambiar el estado 
     primer_opcion = true;
});

dos.addEventListener('click',()=>{
    segunda_opcion = true;
});

tres.addEventListener('click',()=>{
  tercera_opcion =true
});


buttom.addEventListener('click',()=>{
    if(primer_opcion == true){
        document.write('usted es hombre');
    }else
        if(segunda_opcion == true){
            document.write('usted es mujer');
        }
    else{
        document.write('si usted no sabe que es yo menos jejjajaj');
    }
});
