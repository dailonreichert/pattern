import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import ChapaQuadrada from './pages/Chapa/ChapaQuadrada';
import ChapaRedonda from './pages/Chapa/ChapaRedonda';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/chaparedonda" component={ChapaRedonda} />
                <Route path="/chapaquadrada" component={ChapaQuadrada} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
