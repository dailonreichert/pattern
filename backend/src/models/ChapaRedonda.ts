import Observer from '../interfaces/Observer';
import Chapa from './Chapa';

class ChapaRedonda extends Chapa {
    comprimento: number;
    diametroExt: number;


    setLargura(diametroExt: number) {
        this.diametroExt = diametroExt;
    }

}

export default ChapaRedonda;