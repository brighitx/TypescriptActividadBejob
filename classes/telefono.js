export class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set numero(numero) {
        this._numero = numero;
    }
}
export function crearTelefonoConstructor(tipo, numero) {
    let telefono = new Telefono(tipo, numero);
    return telefono;
}
