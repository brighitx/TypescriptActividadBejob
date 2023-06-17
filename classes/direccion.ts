export class Direccion {
    _calle: string;
    _numero: number;
    _piso: string;
    _letra: string;
    _codigoPostal: number;
    _poblacion: string;
    _provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: number,
        poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    get poblacion() {
        return this._poblacion;
    }
    get provincia() {
        return this._provincia;
    }

    set calle(calle: string) {
        this._calle = calle;
    }
    set numero(numero: number) {
        this._numero = numero;
    }
    set piso(piso: string) {
        this._piso = piso;
    }
    set letra(letra: string) {
        this._letra = letra;
    }
    set codigoPostal(codigoPostal: number) {
        this._codigoPostal = codigoPostal;
    }
    set poblacion(poblacion: string) {
        this._poblacion = poblacion;
    }
    set provincia(provincia: string) {
        this._provincia = provincia;
    }

}

export function crearDireccionConstructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: number,
    poblacion: string, provincia: string) {
    let direccion = new Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
    return direccion;
}