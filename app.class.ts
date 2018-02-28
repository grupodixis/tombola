export class Usuario{
    /**
     * ATRIBUTOS
     */
    private datos: { 
        nombre: string,
        apellido: string,
        dni: string,
        email: string,
        movil: number,
        direccion: string
    }
    /**
     * METODOS
     */
    private validate (value,op):any {
        /**
         * Validar DNI, email, telefono
         */
        return;
    }
    constructor (datos) {
        this.datos.nombre = datos.nombre;
        this.datos.apellido = datos.apellido;
        this.datos.dni = this.validate (datos.dni,'dni');
        this.datos.email = this.validate(datos.email,'email');
        this.datos.movil = this.validate(datos.movil,'movil');
        this.datos.direccion = datos.direccion

    }
    
}

export class Comprador {
    private usuario: Usuario;
    
    constructor(){}
}  

export class Vendedor {
    private usuario: Usuario;
}

export class Producto {
    /**
     * Atributos
     */
    private nombre: string;
    private precio: number;
    private participacionesManual: number;
    /**
     * Metodos
     */
    private participaciones(): number{
        let participaciones;
        if (this.precio > 1000 && this.precio < 10000){
            participaciones = 1000;
        }else if (this.precio >10000 && this.precio < 100000){
            participaciones = 10000;
        }else if (this.precio > 100000 && this.precio < 1000000) {
            participaciones = 100000;
        }else if(this.precio >1000000){
            participaciones = this.participacionesManual;
        }
        return participaciones;
    }
    private precioParticipacion (){
        return Math.round((this.precio / 0.75) / this.participaciones()); 
    }
}

export class Categoria {

}

