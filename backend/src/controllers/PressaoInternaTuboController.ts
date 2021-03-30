import {Request, Response} from 'express';

import PressaoInternaTubo from '../models/PressaoInternaTubo';

export default {
    async calculaPressao(request: Request, response: Response) {
        const { pressaokgcm, diametroExtTubo, tensaoadmissivelkgcm} = request.params;

        var pressaoInternaTubo = new PressaoInternaTubo();
        pressaoInternaTubo.setPressaokgcm(Number(pressaokgcm));
        pressaoInternaTubo.setDiametroExtTubo(Number(diametroExtTubo));
        pressaoInternaTubo.setTensaoadmissivelkgcm(Number(tensaoadmissivelkgcm));

        const pressao = pressaoInternaTubo.calculoPressaoTubo();
 
        return response.status(201).json({pressao});
    }
}