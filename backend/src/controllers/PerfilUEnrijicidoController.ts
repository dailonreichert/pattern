import {Request, Response} from 'express';

import PerfilUEnrijecido from '../models/PerfilUEnrijecido';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { aba, base, espessura, comprimento} = request.params;

        var perfilUEnrijecido = new PerfilUEnrijecido();
        perfilUEnrijecido.setAba(Number(aba));
        perfilUEnrijecido.setBase(Number(base));
        perfilUEnrijecido.setEspessura(Number(espessura));
        perfilUEnrijecido.setComprimento(Number(comprimento));

        const peso = perfilUEnrijecido.calculo();
 
        return response.status(201).json({peso});
    }
}