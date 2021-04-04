import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing                   from './pages/Landing/Landing';
import ChapaQuadrada             from './pages/Chapa/ChapaQuadrada';
import ChapaRedonda              from './pages/Chapa/ChapaRedonda';
import BarraRedonda              from './pages/Chapa/BarraRedonda';
import PerfilLSimples            from './pages/Chapa/PerfilLSimples';
import PerfilUSimples            from './pages/Chapa/PerfilUSimples';
import PressaoInterna            from './pages/Pressao/PressaoInterna';
import TorcaoEixoAco1056         from './pages/Torcao/TorcaoEixoAco1045';
import VolumeCubo                from './pages/Volume/VolumeCubo';
import VolumePrismaBaseTriangulo from './pages/Volume/VolumePrismaBaseTriangulo';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact                    component={Landing} />
                <Route path="/chaparedonda"              component={ChapaRedonda} />
                <Route path="/chapaquadrada"             component={ChapaQuadrada} />
                <Route path="/barraredonda"              component={BarraRedonda} />
                <Route path="/perfillsimples"            component={PerfilLSimples} />
                <Route path="/perfilusimples"            component={PerfilUSimples} />
                <Route path="/pressaointerna"            component={PressaoInterna} />
                <Route path="/torcaoeixoaco1045"         component={TorcaoEixoAco1056} />
                <Route path="/volumeCubo"                component={VolumeCubo} />
                <Route path="/volumePrismaBaseTriangulo" component={VolumePrismaBaseTriangulo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
