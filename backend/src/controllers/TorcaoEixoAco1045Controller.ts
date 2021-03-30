import {Request, Response} from 'express';

import TorcaoEixoAco1045 from '../models/TorcaoEixoAco1045';

export default {
    async calculaPressao(request: Request, response: Response) {
        const { potencia, rotacao} = request.params;

        var torcaoEixoAco1045 = new TorcaoEixoAco1045();
        torcaoEixoAco1045.setPotencia(Number(potencia));
        torcaoEixoAco1045.setRotacao(Number(rotacao));

        const torcao = torcaoEixoAco1045.calculoTorcao();
 
        return response.status(201).json({torcao});
    }
}