import ChapaRedonda from './ChapaRedonda';

class BarraRedonda extends ChapaRedonda {
  pi: number = 3.14;
  comprimento: number;

  getPi() {
    return this.pi;
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