import Chapa from '../models/Chapa';

export default {
    render(chapa: Chapa){
        return {
            espessura   : chapa.espessura,
            largura     : chapa.largura,
            comprimento : chapa.comprimento,
        };
    }
}