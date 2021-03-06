import BarraRedonda from "./BarraRedonda";
import ChapaQuadrada from "./ChapaQuadrada";
import ChapaRedonda from "./ChapaRedonda";
import PerfilLSimples from "./PerfilLSimples";
import PerfilUEnrijecido from "./PerfilUEnrijecido";
import TorcaoEixoAco1045 from "./TorcaoEixoAco1045";
import Volume from "./Volume";

interface calcularStrategy {

    calcularPesoChapaRedonda(r: ChapaRedonda): void;
    calcularPesoChapaQuadrada(q: ChapaQuadrada): void;
    calcularPesoPerfilUsimples(u: PerfilUEnrijecido): void;
    calcularPesoPerfilLSimples(l: PerfilLSimples): void;
    calcularPesoBarraRedonda(b: BarraRedonda): void;
    calcularPesoPerfilUEnrijecido(e: PerfilUEnrijecido): void;
    calcularPressaoInternaTubo(i: CalculoPressaoInternaTubos): void;
    calcularTorcaoEixoAco1045(e: TorcaoEixoAco1045): void;
    volumeCubo(v: Volume): void;
    volumeParalelepipedo(v: Volume): void;
    volumePrisma(v: Volume): void;
    volumePiramide(v: Volume): void;
    volumeCilindro(v: Volume): void;

}

export default calcularStrategy;