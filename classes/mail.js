export class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
}
export function crearMailConstructor(tipo, direccion) {
    let mail = new Mail(tipo, direccion);
    return mail;
}
