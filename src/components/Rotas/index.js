import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio/Inicio';
import Login from '../pages/Login/Login';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Inicio /> } />
            <Route path='/Login' element={ <Login /> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;