import { Vendedor } from './vendedor.class';


export class Premio {
    /**
     * Atributos
     */

    private nombre: string;
    private precio: number;
    private participacionesManual: number;
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
        return this.vendidos() * this.precioParticipacion();
    }

    private vendidos():number{
        return this.numerosComprados.length;
    } 
    private numerosComprados (){
        
        return;
    }

    private cupoLibre():any {
        let cupo;
        for (let i = 1; i < this._participaciones; i++) {
            if(i !in this.numerosComprados){
                cupo.push(i);
            }
        }
        return cupo;
    }
    /**
     * Valores Aplicados
     */
    private _participaciones = this.participaciones();
    private _precioParticipacion = this.precioParticipacion();
    private _recaudacion = this.recaudacion();
    private _vendidos = this.vendidos();
    private _numerosComprados = this.numerosComprados();
}