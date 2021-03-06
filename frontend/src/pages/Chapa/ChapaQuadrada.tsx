import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Chapa/Chapa.css';

import api from '../../services/api';

function ChapaQuadrada(){
    const [largura, setLargura] = useState('');
    const [espessura, setEspessura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [peso, setPeso] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`chapaquadrada/${largura}/${espessura}/${comprimento}`).then(response => {
            setPeso(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create-orphanage">
            <form onSubmit={buscaCalculo} className="create-orphanage-form">
                <h1>Chapa Quadrada</h1>
                <div className="input-block">
                    <label htmlFor="largura">Largura (mm)</label>
                    <input
                        id="largura"
                        value={largura}
                        onChange={event => setLargura(event.target.value)}
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

        <div id="page-create-orphanage">
            <form onSubmit={buscaCalculo} className="create-orphanage-form">
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

export default ChapaQuadrada;