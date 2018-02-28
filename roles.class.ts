import { Usuario } from './usuario.class';

export class Rol{
    private usuario:Usuario;
    private rol: Number []; // 0 -> SU 1-> Manager 2-> Vendedor 3 -> Comprador
    public getRol(){
        return this.rol;
    }
}