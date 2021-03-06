import Observer from '../interfaces/Observer';
import Chapa from './Chapa';

class PerfilUsimples extends Chapa{
    aba: number;
    base: number;

    setAba(aba: number){
      this.aba = aba;
    }

    setBase(base: number){
      this.base = base;
    }

}

export default PerfilUsimples;