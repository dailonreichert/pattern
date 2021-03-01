import {Router} from 'express';

import ChapaQudradaController from './controllers/ChapaQuadradaController';

const routes = Router();

routes.get('/chapa/:largura/:espessura/:comprimento',  ChapaQudradaController.calculaPeso);

export default routes;