import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar os componentes para as rotas aqui
import Inicio from '../pages/Inicio/Inicio';
import Login from '../pages/Login/Login';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            {/* Rota principal para a página "Início" */}
            <Route exact path='/' element={ <Inicio /> } />
            {/* Rotas secundárias devem ser adicionadas abaixo */}
            <Route path='/Login' element={ <Login /> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;