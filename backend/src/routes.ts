import {Router} from 'express';

import ChapaController from './controllers/ChapaController';

const routes = Router();

routes.post('/chapa',  ChapaController.calculaPeso);

export default routes;