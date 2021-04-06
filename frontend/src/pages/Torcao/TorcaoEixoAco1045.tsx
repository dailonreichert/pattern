import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function TorcaoEixoAco1056(){
    const [potencia, setPotencia] = useState('');
    const [rotacao, setRotacao] = useState('');
    const [torcao, setTorcao] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`torcaoeixoaco/${potencia}/${rotacao}`).then(response => {
            setTorcao(response.data.torcao); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Torção Eixo Aço 1045</h1>
                <div className="input-block">
                    <label htmlFor="potencia">Potência (mm)</label>
                    <input
                        id="potencia"
                        value={potencia}
                        onChange={event => setPotencia(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="rotacao">Rotação (mm)</label>
                    <input
                        id="rotacao"
                        value={rotacao}
                        onChange={event => setRotacao(event.target.value)}
                    />
                </div>

                <button type="submit" className="primary-button">Confirmar</button>
            </form>
        </div>

        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
            <div className="input-block">
                <label htmlFor="torcao"> Ø mm Necessário para o Eixo  </label>
                <input
                id="torcao"
                value={torcao}/>
            </div>
            </form>
        </div>
        </>
    );
}

export default TorcaoEixoAco1056;