import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function BarraRedonda(){
    const [comprimento, setComprimento] = useState('');
    const [diametro, setDiametro] = useState('');
    const [peso, setPeso] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`barraredonda/${diametro}/${comprimento}`).then(response => {
            setPeso(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Barra Redonda</h1>
                <div className="input-block">
                    <label htmlFor="diametro">Diametro (mm)</label>
                    <input
                        id="diametro"
                        value={diametro}
                        onChange={event => setDiametro(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="comprimento">Comprimento (mm)</label>
                    <input
                        id="comprimento"
                        value={comprimento}
                        onChange={event => setComprimento(event.target.value)}
                    />
                </div>

                <button type="submit" className="primary-button">Confirmar</button>
            </form>
        </div>

        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
            <div className="input-block">
                <label htmlFor="peso">Peso (kg)</label>
                <input
                id="peso"
                value={peso}/>
            </div>
            </form>
        </div>
        </>
    );
}

export default BarraRedonda;