import Observer from '../interfaces/Observer';
import Chapa from './Chapa';

class PerfilLSimples extends Chapa{
    aba1: number;
    aba2: number;

    setAba1(aba1: number){
      this.aba1 = aba1;
    }

    setAba2(aba2: number){
      this.aba2 = aba2;
    }

    calculaPeso() {
    }   
}

export default PerfilLSimples;