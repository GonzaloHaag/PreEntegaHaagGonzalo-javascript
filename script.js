alert("Bienvenido a la pagina oficial de Luka Doncic");
let contadorTalle = 0;
let contadorTalleDos= 0;
let contadorTalleTres= 0;
let precioRemeraM=1400;
let precioRemeraL=1600;
let precioRemeraXL=1800;



let ingreso = prompt("¿Que desea comprar? Opciones: R(remeras), Z(zapatillas) o G(gorras");

if (ingreso == "Z" || ingreso == "G") {
    alert("Lamentablemente en este momento no disponemos stock de estos productos")
}
else if(ingreso == "") {
    alert("Usted no ha ingresado nada...Vuelva a recargar la pagina(f5)")
}

else if(ingreso == "R") {
    let cantidad = Number(prompt("Ingrese la cantidad de remeras que desea comprar:"));

    for(let i=0; i < cantidad;i++) { //el for sera hasta la cantidad que ingrese el usuario
        let talle = prompt("Ingrese el talle de la remera: M , L o XL");
        if (talle == "M") {
            contadorTalle++; // en cada vuelta que se teclee este talle, el contador ira incrementando de 1 en 1
           
        }
        else if(talle == "L") {
            contadorTalleDos++;
           
        }
        else if(talle =="XL") {
            contadorTalleTres++;
            
        }
    }
    alert("Usted llevara " + contadorTalle + " de remeras talle M " + ", " + contadorTalleDos + " de talle L" + " y " + contadorTalleTres + " de talle XL");
precioRemeraM*=contadorTalle; // TENGO QUE HACERLO AFUERA AL ACUMULADOR, SINO ME LO HARA EN CADA VUELTA
precioRemeraL*=contadorTalleDos;
precioRemeraXL*=contadorTalleTres;

function suma(precio1,precio2,precio3) { //pasamos como parametro para guiarnos
    let total = precio1+precio2+precio3;
    alert("El precio total de su compra es de " +  total); //imprimimos el total
}
suma(precioRemeraL,precioRemeraM,precioRemeraXL); //usamos como parametro lo que queriamos sumar --> llamada a la funcion

}
else{
    alert("Opcion incorrecta,recargue la pagina(f5), recuerde que las opciones son: R , Z  o G")
}






