// src/components/ProveedorForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProveedor, getProveedorById, updateProveedor } from '../Services/proveedorService';
import './Proveedor.css';

const ProveedorForm = () => {
    const { id } = useParams();  // Obtiene el ID desde la URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        ciudad: '',
        direccion: '',
        nombre: '',
        telefono: '',
        nit: ''
    });

    useEffect(() => {
        if (id) {
            getProveedorById(id).then(data => setFormData(data));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateProveedor(id, formData);
        } else {
            await createProveedor(formData);
        }
        navigate('/home');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="nit">NIT:</label>
                <input type="text" id="nit" name="nit" value={formData.nit} onChange={handleChange} className="form-input" />
            </div>  
            <div className="form-buttons">
                <button type="submit" className="btn-submit">Guardar</button>
                <button type="button" onClick={() => navigate('/home')} className="btn-cancel">Cancelar</button>
            </div>
        </form>
    );
};

export default ProveedorForm;
