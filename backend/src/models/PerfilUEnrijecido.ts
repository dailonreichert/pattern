import Observer from '../interfaces/Observer';
import PerfilUsimples from './PerfilUSimples';

class PerfilUEnrijecido extends PerfilUsimples{
    enrijecido: number;

    setEnrijecido(enrijecido: number){
      this.enrijecido = enrijecido;
    }

}

export default PerfilUEnrijecido;