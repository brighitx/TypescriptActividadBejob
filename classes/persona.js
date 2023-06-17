import { Direccion } from "./direccion.js";
import { Mail } from './mail.js';
import { Telefono } from './telefono.js';
export class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas, direcciones, mails, telefonos) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get mails() {
        return this._mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set cumpleanos(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    set mails(mails) {
        this._mails = mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
}
export function crearContactoConstructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas, direcciones, mails, telefonos) {
    let direcccion = new Direccion(direcciones.calle, direcciones.numero, direcciones.piso, direcciones.letra, direcciones.codigoPostal, direcciones.poblacion, direcciones.provincia);
    let telefono = new Telefono(telefonos.tipo, telefonos.numero);
    let mail = new Mail(mails.tipo, mails.direccion);
    let persona = new Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas, direcccion, mail, telefono);
    mostrarContactoGuardado(persona);
    guardarContacto(persona);
}
let listaPersonas = [];
function guardarContacto(persona) {
    listaPersonas.push(persona);
    console.log("Lista de contactos actualizada.");
    console.log(listaPersonas);
}
function mostrarContactoGuardado(persona) {
    console.log("Contacto agregado.");
    console.log(persona);
}
let personaEncontrada;
export function buscarContactoPorDNI(dni) {
    if (listaPersonas) {
        listaPersonas.forEach(element => {
            if (element.dni == dni) {
                personaEncontrada = element;
            }
        });
    }
    if (personaEncontrada) {
        return true;
    }
    else {
        return false;
    }
}
export function enviarPersonaEncontrada() {
    return personaEncontrada;
}
export function modificarContactoEncontrado(dni, direcciones, mails, telefonos) {
    if (listaPersonas) {
        let objIndex = listaPersonas.findIndex((obj => obj.dni == dni));
        listaPersonas[objIndex].direcciones = direcciones;
        listaPersonas[objIndex].mails = mails;
        listaPersonas[objIndex].telefonos = telefonos;
        console.log("Lista de contactos actualizada.");
        console.log(listaPersonas);
    }
}
