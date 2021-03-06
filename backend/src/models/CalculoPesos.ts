import BarraRedonda from "./BarraRedonda";
import calcularStrategy from "./calcularStrategy";
import ChapaQuadrada from "./ChapaQuadrada";
import ChapaRedonda from "./ChapaRedonda";
import PerfilLSimples from "./PerfilLSimples";
import PerfilUEnrijecido from "./PerfilUEnrijecido";
import TorcaoEixoAco1045 from "./TorcaoEixoAco1045";
import Volume from "./Volume";

class CalculoPesos implements calcularStrategy {
    calcularPesoChapaRedonda(r: ChapaRedonda): void {
        function calcularPesoChapaRedonda(espessura: number, comprimento: number, diametroExt: number) {
            return

        }
    }
    calcularPesoChapaQuadrada(q: ChapaQuadrada): void {
        function calcularPesoChapaQuadrada(espessura: number, comprimento: number, largura: number) {
            return ((((largura * comprimento) / 1000000) * 7.85) * espessura);

        }

    }
    calcularPesoPerfilUsimples(u: PerfilUEnrijecido): void {
        throw new Error("Method not implemented.");
    }
    calcularPesoPerfilLSimples(l: PerfilLSimples): void {
        throw new Error("Method not implemented.");
    }
    calcularPesoBarraRedonda(b: BarraRedonda): void {
        throw new Error("Method not implemented.");
    }
    calcularPesoPerfilUEnrijecido(e: PerfilUEnrijecido): void {
        throw new Error("Method not implemented.");
    }
    calcularPressaoInternaTubo(i: CalculoPressaoInternaTubos): void {
        function calcularPressaoInternaTubo(pressaokgcm2: number, tensaoadmissivelkgcm: number, diametroExtTubo: number) {
            return (pressaokgcm2 * diametroExtTubo) / (2 * (tensaoadmissivelkgcm + (pressaokgcm2 * 0.4))) + 1.2;

        }
    }
    calcularTorcaoEixoAco1045(e: TorcaoEixoAco1045): void {
        function calcularTorcaoEixoAco1045(potencia: number, rotacao: number) {
            return (((potencia * 1145920) / rotacao) / 1413.7167) ^ 0.3333333 * 10;

        }
    }
    volumeCubo(v: Volume): void {
        function volumeCubo(arestaA: number, arestaB: number, arestaC: number) {
            return (arestaA * arestaB * arestaC);

        }
    }
    volumeParalelepipedo(v: Volume): void {
        function volumeParalelepipedo(arestaA: number, arestaB: number, arestaC: number) {
            return (arestaA * arestaB * arestaC);

        }
    }
    volumePrisma(v: Volume): void {
        function volumePrisma(arestaA: number, arestaB: number, alturaTriangulo: number) {
            return ((arestaA * alturaTriangulo) / 2) * arestaB;

        }
    }
    volumePiramide(v: Volume): void {
        throw new Error("Method not implemented.");
    }
    volumeCilindro(v: Volume): void {
        function volumeCilindro(pi: number, raio:number, altura: number) {
            return (pi *(raio ^ 2) * altura);
        }
    }
}