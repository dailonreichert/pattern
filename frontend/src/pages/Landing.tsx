import React from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';

function Landing(){
    function buscaCalculo(){
        
    }

    return (
        <div id="page-landing">
            <input placeholder="Espessura"></input>
            <input placeholder="Largura"></input>
            <input placeholder="Comprimento"></input>

            <button onClick={buscaCalculo}>Calcular</button>

            {/*<Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
            </Link>*/}
        </div>
    );
}

export default Landing;