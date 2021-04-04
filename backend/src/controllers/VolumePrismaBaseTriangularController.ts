import {Request, Response} from 'express';

import Volume from '../models/Volume';

export default {
    async calculaVolumePrismaBaseTriangular(request: Request, response: Response) {
        const { arestaA, arestaB, altura} = request.params;

        var volume = new Volume();
        volume.setArestaA(Number(arestaA));
        volume.setArestaB(Number(arestaB));
        volume.setAltura(Number(altura));

        const valor = volume.calculoVolumePrismaBaseTriangular();

        return response.status(201).json({valor});
    }
}