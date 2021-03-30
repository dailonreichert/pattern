import {Request, Response} from 'express';

import BarraRedonda from '../models/BarraRedonda';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { diametro, comprimento} = request.params;

        var barraRedonda = new BarraRedonda();
        barraRedonda.setDiametro(Number(diametro));
        barraRedonda.setComprimento(Number(comprimento));

        const peso = barraRedonda.calculo();
 
        return response.status(201).json({peso});
    }
}