import {Entity} from 'typeorm';

@Entity('chapa')
export default class Chapa {
    espessura: number;
    largura: number;
    comprimento: number;

    calculaPeso() {
      return ((((this.largura * this.comprimento) / 1000000) * 7.85) * this.espessura);
    }
}