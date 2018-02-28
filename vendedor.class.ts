import { Usuario } from './usuario.class';
import { validate } from './validator.class';
export class Vendedor {
    /**
     * Atributos
     */
    private usuario: Usuario;
    private cif: string;
    private validator = new validate;
    constructor(datos){
        this.cif = this.validator.validCIF(datos.cif) ? datos.cif : 'invalido';
    }
    /**
     * Metodos
     */

}