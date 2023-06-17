export class Telefono {
    _tipo: string;
    _numero: number;
    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
    set numero(numero: number) {
        this._numero = numero;
    }
}

export function crearTelefonoConstructor(tipo: string, numero: number) {
    let telefono = new Telefono(tipo,numero);
    return telefono;
}
