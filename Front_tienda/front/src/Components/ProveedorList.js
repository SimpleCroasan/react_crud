// src/components/ProveedorList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProveedores, deleteProveedor } from '../Services/proveedorService';
import './ProveedorList.css';

const ProveedorList = () => {
    const [proveedores, setProveedores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProveedores();
    }, []);

    const fetchProveedores = async () => {
        const data = await getProveedores();
        setProveedores(data);
    };

    const handleDelete = async (id) => {
        await deleteProveedor(id);
        fetchProveedores();
    };

    return (
        <div className="proveedor-list-container">
            <h2 className="list-title">Lista de Proveedores</h2>
            <button onClick={() => navigate('/proveedoresForm')} className="btn-add">Agregar Proveedor</button>
            <ul className="proveedor-list">
                {proveedores.map((proveedor) => (
                    <li key={proveedor.id} className="proveedor-item">
                        <span className="proveedor-info">
                            {proveedor.nombre} - {proveedor.ciudad} - {proveedor.direccion} - {proveedor.telefono} - {proveedor.nit}
                        </span>
                        <div className="proveedor-buttons">
                            <button className="btn-edit" onClick={() => navigate(`/proveedoresForm/${proveedor.id}`)}>Editar</button>
                            <button className="btn-delete" onClick={() => handleDelete(proveedor.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProveedorList;
