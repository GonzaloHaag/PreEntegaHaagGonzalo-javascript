//  alert("Bienvenido a la pagina oficial de Luka Doncic");
//  let contadorTalle = 0;
//  let contadorTalleDos= 0;
//  let contadorTalleTres= 0;
//  let precioRemeraM=1400;
//  let precioRemeraL=1600;
//  let precioRemeraXL=1800;



//  let ingreso = prompt("¿Que desea comprar? Opciones: R(remeras), Z(zapatillas) o G(gorras");

//  if (ingreso == "G") {
//      alert("Lamentablemente en este momento no disponemos stock de estos productos")
//  }
//  else if(ingreso == "") {
//      alert("Usted no ha ingresado nada...Vuelva a recargar la pagina(f5)") }

//  else if(ingreso == "R") {
//      let cantidad = Number(prompt("Ingrese la cantidad de remeras que desea comprar:"));

//      for(let i=0; i < cantidad;i++) { //el for sera hasta la cantidad que ingrese el usuario
//          let talle = prompt("Ingrese el talle de la remera: M , L o XL");
//         if (talle == "M") {
//             contadorTalle++; // en cada vuelta que se teclee este talle, el contador ira incrementando de 1 en 1
           
//         }
//         else if(talle == "L") {
//             contadorTalleDos++;
           
//         }
//        else if(talle =="XL") {
//             contadorTalleTres++;
            
//         }
//      }
//     alert("Usted llevara " + contadorTalle + " de remeras talle M " + ", " + contadorTalleDos + " de talle L" + " y " + contadorTalleTres + " de talle XL");
//  precioRemeraM*=contadorTalle; // TENGO QUE HACERLO AFUERA AL ACUMULADOR, SINO ME LO HARA EN CADA VUELTA
//  precioRemeraL*=contadorTalleDos;
//  precioRemeraXL*=contadorTalleTres;

//  function suma(precio1,precio2,precio3) { //pasamos como parametro para guiarnos
//      let total = precio1+precio2+precio3;
//    alert("El precio total de su compra es de " +  total); //imprimimos el total
//  }
//  suma(precioRemeraL,precioRemeraM,precioRemeraXL); //usamos como parametro lo que queriamos sumar --> llamada a la funcion

//  }
//  else if(ingreso == "Z") { //Ponemos en funcionamiento la opcion zapatillas

// //     //Para que el usuario pueda ingresarlo

// //    let agregarProducto = prompt("Ingrese un producto");
// //     function comprarDinamico(agregarProducto) {
// //      carrito.push(BBDD[agregarProducto]);
// // }
// // comprarDinamico(agregarProducto); //para que el usuario lo ingrese
// // console.log(BBDD);

//    //Objetos

//    class marcas {
//     constructor(numeroProducto,nombre,precio) {
//         this.numeroProducto = numeroProducto;
//         this.nombre=nombre;
//         this.precio = precio;
//     }
//    }
// //Creo las marcas que tengo en stock
//    let marca1 = new marcas (001,"Nike",15000);

//    let marca2 = new marcas(002,"Adidas",14000);

//    let marca3 = new marcas(003,"UnderArmour",13500);

//    //Para llamar alguna propiedad de estas marcas, marca1.nombre  y asi

//    //Arrays
//    let arrayMarcas = [marca1.nombre,marca2.nombre,marca3.nombre]; //Guardo solamente el nombre de las marcas en un array
//    let precioMarcas = [marca1.precio,marca2.precio,marca3.precio];//Guardo los precios en un array

//    alert("Las marcas disponibles en zapatillas son: " + arrayMarcas.join("--")); //El join me separa las marcas por el caracter que diga adentro 

//    let ingresoMarca = prompt("De que marca desea conocer el precio? 1(Nike),2(Adidas) o 3(UnderArmour)");

//    switch(ingresoMarca) {
//     case "1":
//         alert("El precio de las zapatillas Nike es de: $" + precioMarcas[0]);
//      break;

//         case "2":
//             alert("El precio de las zapatillas Adidas es de: $" + precioMarcas[1]);
//             break;
//         case "3":

//         alert("El precio de las zapatillas UnderArmour es de: $" + precioMarcas[2]);
//         break;

//    }

//    //Sumamos todos los precios con el metodo .reduce ->Funciones de orden superior

//    let eleccion = prompt("Desea agregar las 3 marcas de zapatillas al carrito?Teclee `SI` para confirmar o `Quiero` para conocer el precio de las zapatillas de menor a mayor");

//    if(eleccion == "SI") {

//    let precioTotal = precioMarcas.reduce((acumulador,elemento)=>acumulador+elemento,0);
//    alert("El precio total entre las 3 marcas de zapatillas es de: " + precioTotal);
//    }
//    else if(eleccion == "Quiero") {
//     let orden = precioMarcas.sort((a,b) => a-b);
//     alert("El orden de los precios de las zapatillas de menor a mayor es: " + orden );
//    }
//    else{
//     alert("Por el momento solo puede comprar las 3 zapatillas juntas");
//    }

// }
// else{
//     alert("Opcion incorrecta,recargue la pagina(f5), recuerde que las opciones son: R , Z  o G")
//  


//TERCERA ENTREGA --> DOM,LOCALSTORAGE,EVENTOS Y JSON


//LocalStorage
const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode"); //Que le agregue esta clase
    localStorage.setItem("dark-mode", "activado");
    botonColorMode.innerText = "Cambiar a modo claro";
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado"); //Le saca la clase por el remove, y le da el valor de desactivado
    botonColorMode.innerText = "Cambiar a modo oscuro";
}

if (darkMode === "activado") { //Para que el abrir la pagina ya se quede cambiando
    activarDarkMode();
    
} else {
    desactivarDarkMode();
    
}
//Evento para cambiar colores
botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") { //Nos fijamos si esta activado 
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
   
})

//Evento para el input

const agregarForm = document.querySelector("#agregar-form"); //capturo el form
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar"); //Capturo la lista con este id

agregarForm.addEventListener("submit",agregarItems); //Se lo paso al formulario, y el evento submit para que se haga cuando apretamos el boton de AGREGAR

function agregarItems(e) {

    e.preventDefault();

    if(agregarInput.value != "") { //Si el input es diferente a vacio

        let item = document.createElement("li"); //Creamos un li

        item.innerText = agregarInput.value; //Modifico el contenido textual de ese li, lo que ponga el usuario en ese li
    
        agregar.append(item); //Para agregarlo a la lista utilizamos append

       

    }
    else{
       console.log("input vacio");
    }

 

    agregarForm.reset(); //Para que se resetee lo q escribimos
    agregarInput.focus(); //Para que se mantenga el focus en ese input

}


//Json


const productos = [
    {
        id:1,
        producto:"Zapatillas",
        precio:1500
    },
    {
        id:2,
        producto:"Gorras",
        precio:1000
    },
    {
        id:3,
        producto:"Remeras",
        precio:2500
    },
  
    

]

const guardarLocal = (clave,valor) => { //Funcion flecha
    localStorage.setItem(clave,valor)
};

//Almcenamos producto por producto
for (const producto of productos) { // Es un array de obejtos, puedo recorrerlo asi

    //.............key..............valor
    //1er vuelta..
    guardarLocal(producto.id,JSON.stringify(producto));
}

//o almacenamos array completo

guardarLocal("listaProductos",JSON.stringify(productos));

console.log(productos); //ahora si saldra el objeto y no object

const buttonProductosDisponibles = document.querySelector(".productos-disponibles");
const divProductos = document.querySelector(".disponibles");

buttonProductosDisponibles.addEventListener("click",verProductos);

function verProductos () {
   divProductos.innerHTML = `
   <p>Zapatillas </p> <br>
   <p>Gorras</p> <br>
   <p>Remeras</p>
   ` 
}















