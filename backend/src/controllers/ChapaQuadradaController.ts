import {Request, Response} from 'express';

import Chapa from '../models/ChapaQuadrada';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { espessura, largura, comprimento} = request.body;
 
        var chapa = new Chapa();
        chapa.setEspessura(espessura);
        chapa.setLargura(largura);
        chapa.setComprimento(comprimento);

        const peso = chapa.calculaPeso();
 
        return response.status(201).json({peso});
    }
}