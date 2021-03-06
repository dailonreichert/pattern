import {Request, Response} from 'express';

import Chapa from '../models/ChapaRedonda';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { espessura, diametro} = request.params;

        var chapa = new Chapa();
        chapa.setEspessura(Number(espessura));
        chapa.setDiametro(Number(diametro));

        const peso = chapa.calculo();
 
        return response.status(201).json({peso});
    }
}