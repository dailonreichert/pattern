import {Request, Response} from 'express';

import Volume from '../models/Volume';

export default {
    async calculaVolumePrismaBaseTriangular(request: Request, response: Response) {
        const { arestaa, arestab, altura} = request.params;

        var volume = new Volume();
        volume.setArestaA(Number(arestaa));
        volume.setArestaB(Number(arestab));
        volume.setAltura(Number(altura));

        const valor = volume.calculoVolumePrismaBaseTriangular();

        return response.status(201).json({valor});
    }
}