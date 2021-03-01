import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Peso from './pages/Peso/Peso';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/peso" component={Peso} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
