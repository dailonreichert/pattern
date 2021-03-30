import ChapaRedonda from './ChapaRedonda';

class BarraRedonda extends ChapaRedonda {
  comprimento: number;

  getPi() {
    return Math.PI;
  }

  setComprimento(comprimento: number){
    this.comprimento = comprimento;
  }

  getComprimento(){
    return this.comprimento;
  }

  calculo() {
    return ((((((this.getPi() * this.getComprimento()) * (this.getDiamentro() * this.getDiamentro() * 7.85) / 4000000)))));
  }
}

export default BarraRedonda;