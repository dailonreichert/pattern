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
            <div id="calc1">
                <a href="/barraredonda" className="teste">Barra Redonda</a>
            </div>
            <div id="calc1">
                <a href="/perfillsimples" className="teste">Perfil L Simples</a>
            </div>
            <div id="calc1">
                <a href="/perfilusimples" className="teste">Perfil U Simples</a>
            </div>
            <div id="calc1">
                <a href="/pressaointerna" className="teste">Pressao Interna</a>
            </div>
            <div id="calc1">
                <a href="/torcaoeixoaco1045" className="teste">Torção Eixo Aço 1045</a>
            </div>
            <div id="calc1">
                <a href="/volumeCubo" className="teste">Volume Cubo</a>
            </div>
            <div id="calc1">
                <a href="/volumePrismaBaseTriangulo" className="teste">Volume Prisma</a>
            </div>
        </div>
    );
}

export default Landing;