import {Request, Response} from 'express';

import PerfilUSimples from '../models/PerfilUSimples';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { aba, base, espessura, comprimento} = request.params;

        var perfilUSimples = new PerfilUSimples();
        perfilUSimples.setAba(Number(aba));
        perfilUSimples.setBase(Number(base));
        perfilUSimples.setEspessura(Number(espessura));
        perfilUSimples.setComprimento(Number(comprimento));

        const peso = perfilUSimples.calculo();
 
        return response.status(201).json({peso});
    }
}