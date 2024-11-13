package Qbiculos.Backend.servicio;

import Qbiculos.Backend.modelo.Proveedor;

import java.util.List;



public interface IProveedorService {

    // Listar los Proveedores
    List<Proveedor> getProveedores();

    // Crear y Grabar un proveedor
    Proveedor nuevoProveedor(Proveedor proveedor);

    // Buscar un proveedor por el id
    Proveedor buscarProveedor(Integer id);
    
    // Eliminar un Proveedor
    void borrarProveedor(Integer id);
    
}
