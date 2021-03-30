import {Router} from 'express';

import ChapaQudradaController       from './controllers/ChapaQuadradaController';
import ChapaRedondaController       from './controllers/ChapaRedondaController';
import BarraRedondaController       from './controllers/BarraRedondaController';
import PerfilLSimplesController     from './controllers/PerfilLSimplesController';
import PerfilUSimplesController     from './controllers/PerfilUSimplesController';
import PressaoInternaTuboController from './controllers/PressaoInternaTuboController';

const routes = Router();

routes.get('/chapaquadrada/:largura/:espessura/:comprimento',                      ChapaQudradaController.calculaPeso);
routes.get('/chaparedonda/:diametro/:espessura',                                   ChapaRedondaController.calculaPeso);
routes.get('/barraredonda/:diametro/:comprimento',                                 BarraRedondaController.calculaPeso);
routes.get('/perfillsimples/:aba1/:aba2/:espessura/:comprimento',                  PerfilLSimplesController.calculaPeso);
routes.get('/perfilusimples/:aba/:base/:espessura/:comprimento',                   PerfilUSimplesController.calculaPeso);
routes.get('/pressaointerna/:pressaokgcm/:diametroExtTubo/:tensaoadmissivelkgcm',  PressaoInternaTuboController.calculaPressao);
routes.get('/torcaoeixoaco/:potencia/:rotacao',                                    PressaoInternaTuboController.calculaPressao);

export default routes;