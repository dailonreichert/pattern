import {Request, Response} from 'express';

import Chapa from '../models/Chapa';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { espessura, largura, comprimento} = request.body;
 
        var chapa = new Chapa();
        chapa.espessura   = espessura;
        chapa.largura     = largura;
        chapa.comprimento = comprimento;

        const peso = chapa.calculaPeso();
 
        return response.status(201).json({peso});
    }
}