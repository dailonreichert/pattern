import {Router} from 'express';

import ChapaQudradaController from './controllers/ChapaQuadradaController';

const routes = Router();

routes.post('/chapa',  ChapaQudradaController.calculaPeso);

export default routes;