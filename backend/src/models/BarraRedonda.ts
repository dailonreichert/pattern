import ChapaRedonda from './ChapaRedonda';

class BarraRedonda extends ChapaRedonda {

  pi: number;

  setPi(pi: number) {
    this.pi = pi;
  }

  getPi() {
    return this.diametro;
  }
  calculo() {
    return ((((((this.getPi() * this.getComprimento()) * (this.getDiamentro() * this.getDiamentro() * 7.85) / 4000000)))));
  }

}

export default BarraRedonda;