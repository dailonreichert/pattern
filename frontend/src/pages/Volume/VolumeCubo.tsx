import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function VolumeCubo(){
    const [arestaa, setArestaa] = useState('');
    const [arestab, setArestab] = useState('');
    const [arestac, setArestac] = useState('');
    const [volume, setVolume] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`volumecubo/${arestaa}/${arestab}/${arestac}`).then(response => {
            setVolume(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Volume Cubo</h1>
                <div className="input-block">
                    <label htmlFor="arestaa">Aresta A (mm)</label>
                    <input
                        id="arestaa"
                        value={arestaa}
                        onChange={event => setArestaa(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="arestab">Aresta B (mm)</label>
                    <input
                        id="arestab"
                        value={arestab}
                        onChange={event => setArestab(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="arestac">Aresta C (mm)</label>
                    <input
                        id="arestac"
                        value={arestac}
                        onChange={event => setArestac(event.target.value)}
                    />
                </div>

                <button type="submit" className="primary-button">Confirmar</button>
            </form>
        </div>

        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
            <div className="input-block">
                <label htmlFor="volume">Volume mm³</label>
                <input
                id="volume"
                value={volume}/>
            </div>
            </form>
        </div>
        </>
    );
}

export default VolumeCubo;