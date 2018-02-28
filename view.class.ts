import { Rol } from "./roles.class";

export class view{
    /**
     * Atributos
     */
    private rolLevel: number;
    private templateUrl: String;
    private rol:Rol;
    /**
     * Metodos
     */
    private authRol (){
        return (this.rolLevel in this.rol.getRol());
    }

}