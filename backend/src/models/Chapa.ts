
class Chapa {
    
    espessura: number;
    comprimento: number;

    setEspessura(espessura: number){
        this.espessura = espessura;
    }

    getEspessura(){
        return this.espessura;
    }
    setComprimento(comprimento: number){
        this.comprimento = comprimento;
    }

    getComprimento(){
        return this.comprimento;
    }

    calculo(){}
}

export default Chapa;