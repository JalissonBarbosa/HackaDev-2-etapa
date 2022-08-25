import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar os componentes para as rotas aqui
import Inicio from '../pages/Inicio/Inicio';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Contrato from '../pages/Contrato/Contrato';
import PassRecovery from '../pages/PassRecovery/PassRecovery';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            {/* Rota principal para a página "Início" */}
            <Route exact path='/' element={ <Inicio /> } />
            {/* Rotas secundárias devem ser adicionadas abaixo */}
            <Route path='/Login' element={ <Login /> } />
            <Route path='/Cadastro' element={ <Cadastro /> } />
            <Route path='/Contrato' element={ <Contrato /> } />
            <Route path='/RecuperarSenha' element={ <PassRecovery /> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;