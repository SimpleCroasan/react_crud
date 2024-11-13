import axios from 'axios';

const API_URL = 'http://localhost:8080/api/proveedor'; 


export const getProveedores = async () => {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
};


export const getProveedorById = async (id) => {
    const response = await axios.get(`${API_URL}/list/${id}`);
    return response.data;
};


export const createProveedor = async (proveedor) => {
    const response = await axios.post(`${API_URL}/`, proveedor);
    return response.data;
};


export const updateProveedor = async (id, proveedor) => {
    const response = await axios.put(`${API_URL}/`, proveedor); 
    return response.data;
};


export const deleteProveedor = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
