
class TorcaoEixoAco1045  {
    potencia: number;
    rotacao: number;

    setPotencia(potencia: number){
      this.potencia = potencia;
    }
    setRotacao(rotacao: number){
        this.rotacao = rotacao;
      }


    getPotencia(){
      return this.potencia;
    }
    getRotacao(){
      return this.rotacao;
    }

      calculo() {
        return (((this.getPotencia() * 1145920) / this.getRotacao()) / 1413.7167) ^ 0.3333333 * 10;
    
    }

}

export default TorcaoEixoAco1045;