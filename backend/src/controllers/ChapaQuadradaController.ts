import {Request, Response} from 'express';

import Chapa from '../models/ChapaQuadrada';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { espessura, largura, comprimento} = request.params;

        var chapa = new Chapa();
        chapa.setEspessura(Number(espessura));
        chapa.setLargura(Number(largura));
        chapa.setComprimento(Number(comprimento));

        const peso = chapa.calculaPeso();
 
        return response.status(201).json({peso});
    }
}

/*teste*/