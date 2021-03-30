import IPressaoTubo from "../interfaces/IPressaoTubo";

class PressaoInternaTubo implements IPressaoTubo {

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

    getPressaokgcm(){
        return this.pressaokgcm;
    }

    getTensaoadmissivelkgcm(){
        return this.tensaoadmissivelkgcm;
    }

    getDiametroExtTubo(){
        return this.diametroExtTubo;
    }

    calculoPressaoTubo(){
        return (this.getPressaokgcm() * this.getDiametroExtTubo()) / (2 * (this.getTensaoadmissivelkgcm() + (this.getPressaokgcm() * 0.4))) + 1.2;
    }

}

export default PressaoInternaTubo;