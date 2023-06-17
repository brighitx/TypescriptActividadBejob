import { crearContactoConstructor } from './classes/persona.js'
import { crearTelefonoConstructor } from './classes/telefono.js'
import { crearMailConstructor } from './classes/mail.js';
import { crearDireccionConstructor } from './classes/direccion.js';
import { buscarContactoPorDNI } from './classes/persona.js';
import { enviarPersonaEncontrada } from './classes/persona.js';
import { modificarContactoEncontrado } from './classes/persona.js';

document.getElementById("modificarContactoEvent").onclick = function modificarContactoEvent() {
    modificarContacto()
}
document.getElementById("buscarContactoEvent").onclick = function buscarContactoEvent() {
    buscarContacto()
}
document.getElementById("crearContactoEvent").onclick = function crearContactoEvent() {
    crearContacto()
}

function crearContacto() {
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apellidos = (<HTMLInputElement>document.getElementById("apellidos")).value;
    let edad: number = +(<HTMLInputElement>document.getElementById("edad")).value;
    let dni = (<HTMLInputElement>document.getElementById("dni")).value;
    let cumpleanos = (<HTMLInputElement>document.getElementById("cumpleanos")).value;
    let colorFavorito = (<HTMLInputElement>document.getElementById("colorFavorito")).value;
    let sexo = (<HTMLInputElement>document.getElementById("sexo")).value;
    let notas = (<HTMLInputElement>document.getElementById("notas")).value;
    let calle = (<HTMLInputElement>document.getElementById("calle")).value;
    let numero: number = +(<HTMLInputElement>document.getElementById("numero")).value;
    let piso = (<HTMLInputElement>document.getElementById("piso")).value;
    let letra = (<HTMLInputElement>document.getElementById("letra")).value;
    let codigoPostal: number = +(<HTMLInputElement>document.getElementById("codigoPostal")).value;
    let poblacion = (<HTMLInputElement>document.getElementById("poblacion")).value;
    let provincia = (<HTMLInputElement>document.getElementById("provincia")).value;
    let tipoTelefono = (<HTMLInputElement>document.getElementById("tipoTelefono")).value;
    let numeroTelefono: number = +(<HTMLInputElement>document.getElementById("numeroTelefono")).value;
    let tipoMail = (<HTMLInputElement>document.getElementById("tipoMail")).value;
    let direccionMail = (<HTMLInputElement>document.getElementById("direccion")).value;

    crearContactoConstructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas,
        crearDireccionConstructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia), crearMailConstructor(tipoMail, direccionMail), crearTelefonoConstructor(tipoTelefono, numeroTelefono));
}
function modificarContacto() {
    let dni = (<HTMLInputElement>document.getElementById("dniEditarMostrar")).value;
    let calle = (<HTMLInputElement>document.getElementById("calleEditar")).value;
    let numero: number = +(<HTMLInputElement>document.getElementById("numeroEditar")).value;
    let piso = (<HTMLInputElement>document.getElementById("pisoEditar")).value;
    let letra = (<HTMLInputElement>document.getElementById("letraEditar")).value;
    let codigoPostal: number = +(<HTMLInputElement>document.getElementById("codigoPostalEditar")).value;
    let poblacion = (<HTMLInputElement>document.getElementById("poblacionEditar")).value;
    let provincia = (<HTMLInputElement>document.getElementById("provinciaEditar")).value;
    let tipoTelefono = (<HTMLInputElement>document.getElementById("tipoTelefonoEditar")).value;
    let numeroTelefono: number = +(<HTMLInputElement>document.getElementById("numeroTelefonoEditar")).value;
    let tipoMail = (<HTMLInputElement>document.getElementById("tipoMailEditar")).value;
    let direccionMail = (<HTMLInputElement>document.getElementById("direccionMailEditar")).value;
    modificarContactoEncontrado(dni, crearDireccionConstructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia), crearMailConstructor(tipoMail, direccionMail), crearTelefonoConstructor(tipoTelefono, numeroTelefono));

}
function buscarContacto() {
    let buscarDni = (<HTMLInputElement>document.getElementById("buscarDNI")).value;
    if (buscarContactoPorDNI(buscarDni)) {
        (<HTMLInputElement>document.getElementById("dniEditarMostrar")).value = enviarPersonaEncontrada().dni;
        (<HTMLInputElement>document.getElementById("calleEditar")).value = enviarPersonaEncontrada().direcciones.calle;
        (<HTMLInputElement>document.getElementById("numeroEditar")).value = enviarPersonaEncontrada().direcciones.numero.toString();
        (<HTMLInputElement>document.getElementById("pisoEditar")).value = enviarPersonaEncontrada().direcciones.piso;
        (<HTMLInputElement>document.getElementById("letraEditar")).value = enviarPersonaEncontrada().direcciones.letra;
        (<HTMLInputElement>document.getElementById("codigoPostalEditar")).value = enviarPersonaEncontrada().direcciones.codigoPostal.toString();
        (<HTMLInputElement>document.getElementById("poblacionEditar")).value = enviarPersonaEncontrada().direcciones.poblacion;
        (<HTMLInputElement>document.getElementById("provinciaEditar")).value = enviarPersonaEncontrada().direcciones.provincia;
        (<HTMLInputElement>document.getElementById("tipoTelefonoEditar")).value = enviarPersonaEncontrada().telefonos.tipo;
        (<HTMLInputElement>document.getElementById("numeroTelefonoEditar")).value = enviarPersonaEncontrada().telefonos.numero.toString();
        (<HTMLInputElement>document.getElementById("tipoMailEditar")).value = enviarPersonaEncontrada().mails.tipo;
        (<HTMLInputElement>document.getElementById("direccionMailEditar")).value = enviarPersonaEncontrada().mails.direccion;
    } else {
        console.log("No existe coincidencia con el DNI insertado.")
    }
}
