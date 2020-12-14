import Subject from '../interfaces/Subject';
import Observer from '../interfaces/Observer';

class Chapa implements Subject{
    espessura: number;
    observers: Observer[] = [];

    setEspessura(espessura: number){
        console.log('Chapa Quadrada: Novo valor para a espessura: ' + espessura);
        this.espessura = espessura;
  
        this.notifyObservers();
    }

    addObserver(observer: Observer): void{
        this.observers.push(observer);
      }
  
      removeObserver(observer: Observer): void{
        let index = this.observers.indexOf(observer);
  
        this.observers.splice(index, 1);
      }
  
      notifyObservers(): void{
        for(let observer of this.observers){
          observer.update(this.espessura);
        }
      }
}

export default Chapa;