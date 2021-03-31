class Volume {
    arestaA: number;
    arestaB: number;
    arestaC: number;
    raio: number;
    altura: number;

    setArestaA(arestaA: number) {
      this.arestaA = arestaA;
    }

    setArestaB(arestaB: number) {
      this.arestaB = arestaB;
    }

    setArestaC(arestaC: number) {
      this.arestaC = arestaC;
    }

    setRaio(raio: number) {
      this.raio = raio;
    }

    setAltura(altura: number) {
      this.altura = altura;
    }

    getArestaA() {
      return this.arestaA;
    }

    getArestaB() {
      return this.arestaB;
    }

    getArestaC() {
      return this.arestaC;
    }

    getPi() {
      return Math.PI;
    }

    getRaio() {
      return this.raio;
    }

    getAltura() {
      return this.altura;
    }

    calculoVolumeCubo() {
      return (this.getArestaA() * this.getArestaB() * this.getArestaC());
    }

    calculoVolumePrismaBaseTriangular() {
      ((this.getArestaA() * this.getAltura()) / 2) * this.getArestaB();
    }
  }

  export default Volume;