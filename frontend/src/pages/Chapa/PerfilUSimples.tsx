import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function PerfilUSimples(){
    const [aba, setAba] = useState('');
    const [base, setBase] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [espessura, setEspessura] = useState('');
    const [peso, setPeso] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`perfillsimples/${aba}/${base}/${espessura}/${comprimento}`).then(response => {
            setPeso(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Perfil U Simples</h1>
                <div className="input-block">
                    <label htmlFor="aba">Aba (mm)</label>
                    <input
                        id="aba"
                        value={aba}
                        onChange={event => setAba(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="base">Base (mm)</label>
                    <input
                        id="base"
                        value={base}
                        onChange={event => setBase(event.target.value)}
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

export default PerfilUSimples;