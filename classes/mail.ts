export class Mail {
    _tipo: string;
    _direccion: string;
    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }

    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
    set direccion(direccion: string) {
        this._direccion = direccion;
    }
}

export function crearMailConstructor(tipo: string, direccion: string) {
    let mail = new Mail(tipo,direccion);
    return mail;
}