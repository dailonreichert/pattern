import ICalculo from '../interfaces/ICalculo';

class Chapa implements ICalculo{
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