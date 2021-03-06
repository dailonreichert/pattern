import Strategy from './../interfaces/Strategy';

class Chapa implements  Strategy{
    espessura: number;

    setEspessura(espessura: number){
        this.espessura = espessura;
    }

    getEspessura(){
        return this.espessura;
    }

    calculo(){}
}

export default Chapa;