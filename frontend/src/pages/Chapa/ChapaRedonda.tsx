import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function ChapaRedonda(){
    const [diametro, setDiametro] = useState('');
    const [espessura, setEspessura] = useState('');
    const [peso, setPeso] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`chaparedonda/${diametro}/${espessura}`).then(response => {
            setPeso(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Chapa Redonda</h1>
                <div className="input-block">
                    <label htmlFor="diametro">Diâmetro Externo (mm)</label>
                    <input
                        id="diametro"
                        value={diametro}
                        onChange={event => setDiametro(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="espessura">Espessura (mm)</label>
                    <input
                        id="espessura"
                        value={espessura}
                        onChange={event => setEspessura(event.target.value)}
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

export default ChapaRedonda;