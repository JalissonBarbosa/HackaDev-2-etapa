import React from "react";
import './caracteristicas.css';

const Caracteristicas = () => {

    return (
        <div className = "caracteristicas">
            <h3>Detalhes do produto:</h3>
            <p>Esse Top Fitness Liso é fabricado em poliamida de alta qualidade, por isso possui toque macio e gelado. Possui alças largas que garantem ainda mais conforto! Além disso, esse Top Fitness sem bojo é todo em tecido duplo. Ou seja, garante sustentação e veste super bem!</p>

            <h3>Características:</h3>
            <ol>
                <li>Desenvolvido para treino, corrida ou yoga</li>
                <li>Estampa digital exclusiva</li>
                <li>Tecido de alta compressão</li>
                <li>Possui detalhe em tela na frente e nas costas;</li>
                <li>Modelagem confortável e justinha</li>
                <li>Proteção UV 50+</li>
                <li>Tecnologia dry</li>
                <li>Proteção UV 50+</li>
                <li>Composição: 77% PES e 23% PUE</li>
            </ol>
        </div>
    );
}

export default Caracteristicas;