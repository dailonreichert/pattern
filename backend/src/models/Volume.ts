
class Volume {
  arestaA: number;
  arestaB: number;
  arestaC: number;
  pi: number;
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
  setPi(pi: number) {
    this.pi = pi;
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
    return this.pi;
  }
  getRaio() {
    return this.raio;
  }
  getAltura() {
    return this.altura;
  }
  calcularvolumecubo() {
    return (this.getArestaA() * this.getArestaB() * this.getArestaC());
  }

  calcularvolumeparalelepipedo() {
    return (this.getArestaA() * this.getArestaB() * this.getArestaC());
  }
  calcularvolumeprismabasetriangular() {
    ((this.getArestaA() * this.getAltura()) / 2) * this.getArestaB();
  }
  calcularvolumePiramidebasequadrada() {
    return ((this.getArestaA() * this.getArestaB()) * this.getAltura()) / 3;
  }
  calcularvolumecilindro() {
    return (this.getPi() * (this.getRaio() ^ 2) * this.getAltura());
  }
}
export default Volume;