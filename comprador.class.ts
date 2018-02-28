import { Usuario } from './usuario.class';
import { Premio } from './premio.class';

export class Comprador {
    /**
     * Atributos
     */
    private usuario: Usuario;
    private compras:[{
        premio:Premio,
        participaciones: number []
    }]
    
    constructor(){}
}  