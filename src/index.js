import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Sorteo from './pages/principal';
import Administrador from './pages/administrador';
import Login from './components/Login';
import SorteoAdmin from './pages/administrador/components/Sorteo_admin';
import SalaAdmin from './pages/administrador/components/Sala_admin';
import Ganadores from './pages/administrador/components/ganadores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Sorteo />} />
        <Route path="login" element={<Login />} />

        <Route path="administrador" element={<Administrador />}>
          <Route index element={<SorteoAdmin />} />
          <Route index path="sorteo_admin" element={<SorteoAdmin />} />
          <Route path="sala_admin" element={<SalaAdmin />} />
          <Route path="ganadores" element={<Ganadores />} />
        </Route>
      </Route>
      <Route path="*" element={<p>No existe</p>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
