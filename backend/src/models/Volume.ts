class Volume {
    arestaA: number;
    arestaB: number;
    arestaC: number;
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

    getAltura() {
      return this.altura;
    }

    calculoVolumeCubo() {
      return (this.getArestaA() * this.getArestaB() * this.getArestaC());
    }

    calculoVolumePrismaBaseTriangular() {
      return ((this.getArestaA() * this.getAltura()) / 2) * this.getArestaB();
    }
  }

  export default Volume;