// src/App.js
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProveedorList from './Components/ProveedorList';
import ProveedorForm from './Components/ProveedorForm';
import Login from './Components/Login';

function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/proveedoresForm" element={<ProveedorForm />} />
                    <Route path="/proveedoresForm/:id" element={<ProveedorForm />} />
                    <Route path="/home" element={<ProveedorList />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

export default App;
