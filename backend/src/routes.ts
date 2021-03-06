import {Router} from 'express';

import ChapaQudradaController from './controllers/ChapaQuadradaController';
import ChapaRedondaController from './controllers/ChapaRedondaController';

const routes = Router();

routes.get('/chapaquadrada/:largura/:espessura/:comprimento',  ChapaQudradaController.calculaPeso);
routes.get('/chaparedonda/:diametro/:espessura',  ChapaRedondaController.calculaPeso);

export default routes;