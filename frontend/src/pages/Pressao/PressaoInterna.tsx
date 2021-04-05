import React, { FormEvent, useState } from 'react';
//import {FiArrowRight} from 'react-icons/fi';
//import {Link} from 'react-router-dom';

import '../../styles/pages/Main.css';

import api from '../../services/api';

function PressaoInterna(){
    const [pressaokgcm, setPressaokgcm] = useState('');
    const [diametroExtTubo, setDiametroExtTubo] = useState('');
    const [tensaoAdmissivelKgcm, setTensaoAdmissivelKgcm] = useState('');
    const [pressao, setPressao] = useState('');

    function buscaCalculo(event: FormEvent){
        event.preventDefault();

        api.get(`pressaointerna/${pressaokgcm}/${diametroExtTubo}/${tensaoAdmissivelKgcm}`).then(response => {
            setPressao(response.data.peso); 
        });
    }

    return (
        <>
        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
                <h1>Pressão Interna</h1>
                <div className="input-block">
                    <label htmlFor="pressaokgcm">Pressão Kgcm</label>
                    <input
                        id="pressaokgcm"
                        value={pressaokgcm}
                        onChange={event => setPressaokgcm(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="diametroExtTubo">Diâmetro Ext. (mm)</label>
                    <input
                        id="diametroExtTubo"
                        value={diametroExtTubo}
                        onChange={event => setDiametroExtTubo(event.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="tensaoAdmissivelKgcm">Tensão Adimissível Kgcm (mm)</label>
                    <input
                        id="tensaoAdmissivelKgcm"
                        value={tensaoAdmissivelKgcm}
                        onChange={event => setTensaoAdmissivelKgcm(event.target.value)}
                    />
                </div>

                <button type="submit" className="primary-button">Confirmar</button>
            </form>
        </div>

        <div id="page-create">
            <form onSubmit={buscaCalculo} className="create-form">
            <div className="input-block">
                <label htmlFor="pressao">Espessura mínima de parede para tubos de aço carbono submetidos à pressão interna</label>
                <input
                id="pressao"
                value={pressao}/>
            </div>
            </form>
        </div>
        </>
    );
}

export default PressaoInterna;