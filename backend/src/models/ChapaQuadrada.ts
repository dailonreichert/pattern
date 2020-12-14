import Observer from '../interfaces/Observer';
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

    calculaPeso() {
      return ((((this.largura * this.comprimento) / 1000000) * 7.85) * this.espessura);
    }   
}

export default ChapaQuadrada;