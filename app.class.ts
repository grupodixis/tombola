import { validate } from './validator.class';
import { Usuario } from './usuario.class';
import { Premio } from './premio.class';







export class Comprador {
    /**
     * Atributos
     */
    private usuario: Usuario;
    private compras:[{
        producto:Premio,
        participaciones: number []
    }]
    
    constructor(){}
}  

export class Vendedor {
    /**
     * Atributos
     */
    private usuario: Usuario;
    private cif: number;
    private validator = new validate;
    constructor(datos){
        this.cif = this.validator.validCIF(datos.cif) ? datos.cif : 'invalido';
    }
    /**
     * Metodos
     */

}

export class Categoria {

}

export class Ls{
    public save (key, data){ 
        localStorage.setItem(key,data);
    }
    public load (key){
        localStorage.getItem(key);
    }
} 
