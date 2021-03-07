import Chapa from './Chapa';

class PerfilLSimples extends Chapa {
  aba1: number;
  aba2: number;

  setAba1(aba1: number) {
    this.aba1 = aba1;
  }

  setAba2(aba2: number) {
    this.aba2 = aba2;
  }

  getAba1() {
    return this.aba1;
  }
  getAba2() {
    return this.aba2;
  }

  calculo() {
    return ((((((((((this.getAba2() + this.getAba1()) - (3 * 2)))) * this.getComprimento()) / 1000000) * 7, 85) * this.getEspessura())));
  }

}

export default PerfilLSimples;