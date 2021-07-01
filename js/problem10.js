/*
    15) Elabore un Algoritmo que permita ingresar el monto de venta alcanzado por un vendedor durante el mes, luego de calcular la bonificación que le corresponde sabiendo:    

*/

let monto_venta;
let bonificacion;

monto_venta = parseInt(prompt('ingrese el monto de lo que has vendido en el mes'));

if(monto_venta >= 0 && monto_venta <= 100){
    document.write(`<p>no te sale bonificacion</p>`);
}else
    if(monto_venta >= 1000 && monto_venta <= 5000){
        bonificacion = (monto_venta * 0.3);
        document.write(`<h1>tu bonificacion es: ${bonificacion} </h1>`);
}else
    if(monto_venta >= 5000 && monto_venta <= 20000){
        bonificacion = (monto_venta * 0.5);
        document.write(`<h1>te has esforzado mucho tu bono es: ${bonificacion}</h1>`);
}else
    if(monto_venta > 20000 && monto_venta <= 30000){
        bonificacion = (monto_venta * 0.8);
        document.write(`<h1>te has esforzado mucho tu bono es: ${bonificacion}</h1>`);
}else
    if(monto_venta > 30000){
        bonificacion = (monto_venta * 0.10);
        document.write(`<h1>has batido un record tu bono es: ${bonificacion}</h1>`)
}else{
    alert('seguro la has cagado');
}