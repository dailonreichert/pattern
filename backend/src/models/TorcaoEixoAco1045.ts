import ITorcao from "../interfaces/ITorcao";

class TorcaoEixoAco1045 implements ITorcao  {
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

    calculoTorcao() {
        return (((this.getPotencia() * 1145920) / this.getRotacao()) / 1413.7167) ^ 0.3333333 * 10;
    }

}

export default TorcaoEixoAco1045;