import PerfilUSimples from './PerfilUSimples';

class PerfilUEnrijecido extends PerfilUSimples{
    enrijecido: number;

    setEnrijecido(enrijecido: number){
      this.enrijecido = enrijecido;
    }

    getEnrijecido() {
      return this.enrijecido;
    }

    calculo(){
      return (((((((((this.getAba()*2)+this.getBase())-(this.getEspessura()*4)))*this.getComprimento())/1000000)*7,85)*this.getEspessura()));
    }

}

export default PerfilUEnrijecido;