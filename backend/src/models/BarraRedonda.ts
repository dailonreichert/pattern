import Observer from '../interfaces/Observer';
import ChapaRedonda from './ChapaRedonda';

class BarraRedonda extends ChapaRedonda {
    
    pi: number;

    setPi(pi: number){
      this.pi = pi;
    }
  
}

export default BarraRedonda;