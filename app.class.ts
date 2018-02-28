import { validate } from './validator.class';
import { Usuario } from './usuario.class';
import { Premio } from './premio.class';





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


