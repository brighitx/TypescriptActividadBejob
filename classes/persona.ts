import { Direccion } from "./direccion.js";
import { Mail } from './mail.js';
import { Telefono } from './telefono.js';

export class Persona {
    _nombre: string;
    _apellidos: string;
    _edad: number;
    _dni: string;
    _cumpleanos: string;
    _colorFavorito: string;
    _sexo: string;
    _direcciones: Direccion;
    _mails: Mail;
    _telefonos: Telefono;
    _notas: string;
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string,
        colorFavorito: string, sexo: string, notas: string, direcciones: Direccion, mails: Mail, telefonos: Telefono
    ) {
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
    public get nombre() {
        return this._nombre;
    }
    public get apellidos() {
        return this._apellidos;
    }
    public get edad() {
        return this._edad;
    }
    public get dni() {
        return this._dni;
    }
    public get cumpleanos() {
        return this._cumpleanos;
    }
    public get colorFavorito() {
        return this._colorFavorito;
    }
    public get sexo() {
        return this._sexo;
    }
    public get direcciones() {
        return this._direcciones;
    }
    public get mails() {
        return this._mails;
    }
    public get telefonos() {
        return this._telefonos;
    }
    public get notas() {
        return this._notas;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }
    set edad(edad: number) {
        this._edad = edad;
    }
    set dni(dni: string) {
        this._dni = dni;
    }
    set cumpleanos(cumpleanos: string) {
        this._cumpleanos = cumpleanos;
    }
    set colorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }
    set sexo(sexo: string) {
        this._sexo = sexo;
    }
    set direcciones(direcciones: Direccion) {
        this._direcciones = direcciones;
    }
    set mails(mails: Mail) {
        this._mails = mails;
    }
    set telefonos(telefonos: Telefono) {
        this._telefonos = telefonos;
    }
    set notas(notas: string) {
        this._notas = notas;
    }


}
export function crearContactoConstructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string,
    colorFavorito: string, sexo: string, notas: string, direcciones: Direccion, mails: Mail, telefonos: Telefono) {
    let direcccion = new Direccion(direcciones.calle, direcciones.numero, direcciones.piso, direcciones.letra, direcciones.codigoPostal, direcciones.poblacion, direcciones.provincia);
    let telefono = new Telefono(telefonos.tipo, telefonos.numero);
    let mail = new Mail(mails.tipo, mails.direccion);

    let persona = new Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, notas,
        direcccion, mail, telefono)
    mostrarContactoGuardado(persona)
    guardarContacto(persona)
}

let listaPersonas: Persona[] = [];
function guardarContacto(persona: Persona) {
    listaPersonas.push(persona);
    console.log("Lista de contactos actualizada.")
    console.log(listaPersonas)
}

function mostrarContactoGuardado(persona: Persona) {
    console.log("Contacto agregado.")
    console.log(persona)
}
let personaEncontrada: Persona;
export function buscarContactoPorDNI(dni: string): Boolean {
    if (listaPersonas) {
        listaPersonas.forEach(element => {
            if (element.dni == dni) {
                personaEncontrada = element;
            }
        });
    }
    if (personaEncontrada) {
        return true;
    } else { return false }

}

export function enviarPersonaEncontrada(): Persona {
    return personaEncontrada;
}

export function modificarContactoEncontrado(dni: string, direcciones: Direccion, mails: Mail, telefonos: Telefono) {
    if (listaPersonas) {
       let objIndex = listaPersonas.findIndex((obj => obj.dni == dni));
       listaPersonas[objIndex].direcciones = direcciones;
       listaPersonas[objIndex].mails = mails;
       listaPersonas[objIndex].telefonos = telefonos;
       console.log("Lista de contactos actualizada.")
       console.log(listaPersonas)
    }
}