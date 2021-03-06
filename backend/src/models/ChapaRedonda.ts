import Chapa from './Chapa';

class ChapaRedonda extends Chapa{
    diametro: number;

    setDiametro(diametro: number){
      this.diametro = diametro;
    }

    getDiamentro(){
      return this.diametro;
    }

    calculo() {
      return ((((((this.getDiamentro() * this.getDiamentro())*  0,62) / 100) * this.getEspessura()) / 1000));
    }   
}

export default ChapaRedonda;