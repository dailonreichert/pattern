
class TorcaoEixoAco1045  {
   
    pressaokgcm: number;
    tensaoadmissivelkgcm: number;
    diametroExtTubo: number;

    setPressaokgcm(pressaokgcm: number) {
        this.pressaokgcm = pressaokgcm;
    }
    setTensaoadmissivelkgcm(tensaoadmissivelkgcm: number) {
        this.tensaoadmissivelkgcm = tensaoadmissivelkgcm;
    }
    setDiametroExtTubo(diametroExtTubo: number) {
        this.diametroExtTubo = diametroExtTubo;
    }

    getPessaokgcm(){
        return this.pressaokgcm;
    }
    getTensaoadmissivelkgcm(){
        return this.tensaoadmissivelkgcm;
    }
    getDiametroExtTubo(){
        return this.diametroExtTubo;
    }

    calculo(){
        return (this.getPessaokgcm() * this.getDiametroExtTubo()) / (2 * (this.getTensaoadmissivelkgcm() + (this.getPessaokgcm()* 0.4))) + 1.2;

    }

}

export default TorcaoEixoAco1045;