import Chapa from './Chapa';

class ChapaQuadrada extends Chapa{
    largura: number;
    comprimento: number;

    setLargura(largura: number){
      this.largura = largura;
    }

    setComprimento(comprimento: number){
      this.comprimento = comprimento;
    }

    getLargura(){
      return this.largura;
    }

    getComprimento(){
      return this.comprimento;
    }

    calculo() {
      return ((((this.getLargura() * this.getComprimento()) / 1000000) * 7.85) * this.getEspessura());
    }   
}

export default ChapaQuadrada;