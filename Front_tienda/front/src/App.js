// src/App.js
import React, { useState } from 'react';
import ProveedorList from './Components/ProveedorList';
import ProveedorForm from './Components/ProveedorForm';

function App() {
    const [selectedId, setSelectedId] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleEdit = (id) => {
        setSelectedId(id);
        setIsFormVisible(true);
    };

    const handleSave = () => {
        setSelectedId(null);
        setIsFormVisible(false);
    };

    const handleCancel = () => {
        setSelectedId(null);
        setIsFormVisible(false);
    };

    return (
        <div className="App">
            <h1>Gestión de Proveedores</h1>
            {isFormVisible ? (
                <ProveedorForm selectedId={selectedId} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <>
                    <button onClick={() => setIsFormVisible(true)}>Agregar Proveedor</button>
                    <ProveedorList onEdit={handleEdit} />
                </>
            )}
        </div>
    );
}

export default App;
