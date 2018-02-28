import { validate } from './validator.class';
export class Usuario{
    /**
     * ATRIBUTOS
     */
    validator = new validate;
    private datos: { 
        nombre: string,
        apellido: string,
        dni: string,
        email: string,
        movil: number,
        direccion: string
    };
    

    /**
     * METODOS
     */
  
    constructor (datos) {
        this.datos.nombre = datos.nombre;
        this.datos.apellido = datos.apellido;
        this.datos.dni = this.validator.validDNI (datos.dni)? datos.dni : "Invalido" ;
        this.datos.email = this.validator.validEmail(datos.email)? datos.email :"Invalido" ;
        this.datos.movil = this.validator.validMovil(datos.movil)? datos.movil : "Invalido" ;
        this.datos.direccion = datos.direccion

    }
    private autenticado (){

    }
    
}