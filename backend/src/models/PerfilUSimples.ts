import Chapa from './Chapa';

class PerfilUSimples extends Chapa{
    aba: number;
    base: number;
    comprimento: number;

    setAba(aba: number){
      this.aba = aba;
    }

    setBase(base: number){
      this.base = base;
    }

    getAba() {
      return this.aba;
    }

    getBase() {
      return this.base;
    }

    setComprimento(comprimento: number){
        this.comprimento = comprimento;
    }

    getComprimento(){
        return this.comprimento;
    }

    calculo() {
      return (((((((((this.getAba() * 2) + this.getBase()) - (this.getEspessura() * 4))) * this.getComprimento()) / 1000000)* 7.85) * this.getEspessura()));
    }
}
export default PerfilUSimples;