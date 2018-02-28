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
        if (this.rolLevel in this.rol.getRol()){
            return true;
        }else{
            return false;
        }
    }

}