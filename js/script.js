const datos = {
    nombre:"",
    celular:"",
    correo:"",
    mensaje:"",
}

// Eventos de los input

const nombre = document.querySelector("#nombre");
const celular = document.querySelector("#celular");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");

/*console.log(nombre);
console.log(celular);
console.log(correo);
console.log(mensaje);*/

// prueba event listener
/*nombre.addEventListener("input", prueba);
function prueba(){
    alert("ingresaste el nombre");
}*/

nombre.addEventListener("input", leerTexto);
celular.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(evento){
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;
    //console.log(datos);
}

const formulario = document.querySelector(".formulario");
//console.log(formulario)
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    //destructuring
    const{nombre, celular, correo, mensaje} = datos;
    //console.log(nombre, celular, correo, mensaje);
    if (nombre === "" || celular === "" || correo === "" || mensaje === ""){
        //console.log("Todos los campos son obligatorios");
        mostrarError ("Debe diligenciar todos los campos");
        return; //corta la ejecucion del codigo
    }
    mostrarMensaje("Datos enviados correctamente")

    function mostrarMensaje(mensaje){
        let alerta = document.createElement("div");//crea una nueva etiqueta ("div")
        alerta.textContent = mensaje//crea un mensaje en la etiqueta creada
        alerta.classList.add("correcto")//adiciona una clase a la etiqueta creada
        formulario.appendChild(alerta);//adiciona la clase hijo al final de la etiqueta padre
        setTimeout(() => {
            alerta.remove();
        }, 3000)
    }

    function mostrarError(mensaje){
        //console.log(mensaje)
        let error = document.createElement("div");//crea una nueva etiqueta ("div")
        error.textContent = mensaje;//crea un mensaje en la etiqueta creada
        error.classList.add("error")//adiciona una clase a la etiqueta creada
        //console.log(error);
        formulario.appendChild(error);//adiciona la clase hijo al final de la etiqueta padre
        setTimeout(() => {
            error.remove();
        }, 3000)
    }
})