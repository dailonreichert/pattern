import {Request, Response} from 'express';

import PerfilLSimples from '../models/PerfilLSimples';

export default {
    async calculaPeso(request: Request, response: Response) {
        const { aba1, aba2, espessura, comprimento} = request.params;

        var perfilLSimples = new PerfilLSimples();
        perfilLSimples.setAba1(Number(aba1));
        perfilLSimples.setAba2(Number(aba2));
        perfilLSimples.setEspessura(Number(espessura));
        perfilLSimples.setComprimento(Number(comprimento));

        const peso = perfilLSimples.calculo();
 
        return response.status(201).json({peso});
    }
}