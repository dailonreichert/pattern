import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function PerfilLSimples(){
    const [aba1, setAba1] = useState('');
    const [aba2, setAba2] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [espessura, setEspessura] = useState('');
    const [peso, setPeso] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`perfillsimples/${aba1}/${aba2}/${espessura}/${comprimento}`).then(response => {
            setPeso(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Perfil L Simples</h1>
                <div className="input-block">
                    <label htmlFor="aba1">Aba 1 (mm)</label>
                    <input
                        id="aba1"
                        value={aba1}
                        onChange={event => setAba1(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="aba2">Aba 2 (mm)</label>
                    <input
                        id="aba2"
                        value={aba2}
                        onChange={event => setAba2(event.target.value)}
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

export default PerfilLSimples;