import React from 'react';

import '../../styles/pages/Landing/Landing.css';

function Landing(){
    return (
        <div id="main">
            <div id="calc">
                <a href="/chaparedonda" className="teste">Chapa Redonda</a>
            </div>
            <div id="calc1">
                <a href="/chapaquadrada" className="teste">Chapa Quadrada</a>
            </div>
        </div>
    );
}

export default Landing;