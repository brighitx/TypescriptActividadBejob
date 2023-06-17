import { crearContactoConstructor } from './classes/persona.js';
import { crearTelefonoConstructor } from './classes/telefono.js';
import { crearMailConstructor } from './classes/mail.js';
import { crearDireccionConstructor } from './classes/direccion.js';
import { buscarContactoPorDNI } from './classes/persona.js';
import { enviarPersonaEncontrada } from './classes/persona.js';
import { modificarContactoEncontrado } from './classes/persona.js';
document.getElementById("modificarContactoEvent").onclick = function modificarContactoEvent() {
    modificarContacto();
};
document.getElementById("buscarContactoEvent").onclick = function buscarContactoEvent() {
    buscarContacto();
};
document.getElementById("crearContactoEvent").onclick = function crearContactoEvent() {
    crearContacto();
};
function crearContacto() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = +document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let cumpleanos = document.getElementById("cumpleanos").value;
    let colorFavorito = document.getElementById("colorFavorito").value;
    let sexo = document.getElementById("sexo").value;
    let notas = document.getElementById("notas").value;
    let calle = document.getElementById("calle").value;
    let numero = +document.getElementById("numero").value;
    let piso = document.getElementById("piso").value;
    let letra = document.getElementById("letra").value;
    let codigoPostal = +document.getElementById("codigoPostal").value;
    let poblacion = document.getElementById("poblacion").value;
    let provincia = document.getElementById("provincia").value;
    let tipoTelefono = document.getElementById("tipoTelefono").value;
    let numeroTelefono = +document.getElementById("numeroTelefono").value;
    let tipoMail = document.getElementById("tipoMail").value;
    let direccionMail = document.getElementById("direccion").value;
    crearContactoConstructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas, crearDireccionConstructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia), crearMailConstructor(tipoMail, direccionMail), crearTelefonoConstructor(tipoTelefono, numeroTelefono));
}
function modificarContacto() {
    let dni = document.getElementById("dniEditarMostrar").value;
    let calle = document.getElementById("calleEditar").value;
    let numero = +document.getElementById("numeroEditar").value;
    let piso = document.getElementById("pisoEditar").value;
    let letra = document.getElementById("letraEditar").value;
    let codigoPostal = +document.getElementById("codigoPostalEditar").value;
    let poblacion = document.getElementById("poblacionEditar").value;
    let provincia = document.getElementById("provinciaEditar").value;
    let tipoTelefono = document.getElementById("tipoTelefonoEditar").value;
    let numeroTelefono = +document.getElementById("numeroTelefonoEditar").value;
    let tipoMail = document.getElementById("tipoMailEditar").value;
    let direccionMail = document.getElementById("direccionMailEditar").value;
    modificarContactoEncontrado(dni, crearDireccionConstructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia), crearMailConstructor(tipoMail, direccionMail), crearTelefonoConstructor(tipoTelefono, numeroTelefono));
}
function buscarContacto() {
    let buscarDni = document.getElementById("buscarDNI").value;
    if (buscarContactoPorDNI(buscarDni)) {
        document.getElementById("dniEditarMostrar").value = enviarPersonaEncontrada().dni;
        document.getElementById("calleEditar").value = enviarPersonaEncontrada().direcciones.calle;
        document.getElementById("numeroEditar").value = enviarPersonaEncontrada().direcciones.numero.toString();
        document.getElementById("pisoEditar").value = enviarPersonaEncontrada().direcciones.piso;
        document.getElementById("letraEditar").value = enviarPersonaEncontrada().direcciones.letra;
        document.getElementById("codigoPostalEditar").value = enviarPersonaEncontrada().direcciones.codigoPostal.toString();
        document.getElementById("poblacionEditar").value = enviarPersonaEncontrada().direcciones.poblacion;
        document.getElementById("provinciaEditar").value = enviarPersonaEncontrada().direcciones.provincia;
        document.getElementById("tipoTelefonoEditar").value = enviarPersonaEncontrada().telefonos.tipo;
        document.getElementById("numeroTelefonoEditar").value = enviarPersonaEncontrada().telefonos.numero.toString();
        document.getElementById("tipoMailEditar").value = enviarPersonaEncontrada().mails.tipo;
        document.getElementById("direccionMailEditar").value = enviarPersonaEncontrada().mails.direccion;
    }
    else {
        console.log("No existe coincidencia con el DNI insertado.");
    }
}
