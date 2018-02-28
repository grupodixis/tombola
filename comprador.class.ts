import { Usuario } from './usuario.class';
import { Premio } from './premio.class';

export class Comprador {
    private usuario: Usuario;
    private compra: Compras;
    
    constructor(){}
}  

export class Compras{
    private compra:{
        premio:Premio,
        participaciones: number[]
    }
    private comprar(premio:Premio,participacion:number){
        this.compra.premio =premio;
        this.compra.participaciones.push(participacion);
    }
    constructor(){

    }
}