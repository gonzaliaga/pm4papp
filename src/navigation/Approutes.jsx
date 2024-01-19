import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/home/home';
import Nosotros from '../views/Nosotros/Nosotros';
import Menu from '../views/Menu/Menu';
import Reservas from '../views/Reservas/Reservas';
import Layout from '../layout/layout';

function AppRoutes() {
  return (
    <Routes>
{/*       <Route path="/" element={<Layout />} />
 */}      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}

export default AppRoutes;
