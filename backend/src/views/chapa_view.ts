import Chapa from '../models/ChapaQuadrada';

export default {
    render(chapa: Chapa){
        return {
            espessura   : chapa.espessura,
            largura     : chapa.largura,
            comprimento : chapa.comprimento,
        };
    }
}