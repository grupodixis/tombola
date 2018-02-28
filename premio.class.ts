import { Vendedor } from './app.class';
export class Premio {
    /**
     * Atributos
     */
    private nombre: string;
    private precio: number;
    private participacionesManual: number;
    private cupo: number;
    private vendedor:Vendedor;
    
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
    private recaudacion () {
        return this.cupo * this.precioParticipacion();
    }
    private _participaciones = this.participaciones();
    private _precioParticipacion = this.precioParticipacion();
    private _recaudacion = this.recaudacion();
}