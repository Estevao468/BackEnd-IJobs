import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Servico from './pages/Servico';
import Perfil from './pages/Perfil';
import Editar from './pages/Editar';
import Catalogo from './pages/Catalogo';
import '../src/global.css';
import foto from './img/logo.png'

const App = () => {
      return (
        <Router>
          <div><span className="title">
          <b>IJobs
          <img className='logo' src={foto}/>
          </b>
          </span>
          </div>
        <div className="Cabecalho">
            <ul>
            <Link to="/" className="Rotas">Home</Link> 
            <Link to="/cadastro" className="Rotas">Cadastro</Link>
            <Link to="/login" className="Rotas">Login</Link>
            <Link to="/servico" className="Rotas">Servico</Link>
            <Link to="/editar" className="Rotas">Editar</Link>
            <Link to="/perfil" className="Rotas">Perfil</Link>
            <Link to="/catalogo" className="Rotas">Catalogo</Link>
            </ul>
        </div>
        <Routes>
           <Route path="/" element={<Home/>}/> 
           <Route path="/cadastro" element={<Cadastro/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/servico" element={<Servico/>}/>
           <Route path="/editar" element={<Editar/>}/>
           <Route path="/perfil" element={<Perfil/>}/>
           <Route path="/catalogo" element={<Catalogo/>}/>
        </Routes>
    </Router>

      );
    }


export default App;
