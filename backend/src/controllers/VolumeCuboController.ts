import {Request, Response} from 'express';

import Volume from '../models/Volume';

export default {
    async calculaVolumeCubo(request: Request, response: Response) {
        const { arestaA, arestaB, arestaC} = request.params;

        var volume = new Volume();
        volume.setArestaA(Number(arestaA));
        volume.setArestaB(Number(arestaB));
        volume.setArestaC(Number(arestaC));

        const valor = volume.calculoVolumeCubo();
 
        return response.status(201).json({valor});
    }
}