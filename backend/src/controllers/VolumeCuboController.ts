import {Request, Response} from 'express';

import Volume from '../models/Volume';

export default {
    async calculaVolumeCubo(request: Request, response: Response) {
        const { arestaa, arestab, arestac} = request.params;

        var volume = new Volume();
        volume.setArestaA(Number(arestaa));
        volume.setArestaB(Number(arestab));
        volume.setArestaC(Number(arestac));

        const valor = volume.calculoVolumeCubo();
 
        return response.status(201).json({valor});
    }
}