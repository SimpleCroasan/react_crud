package Qbiculos.Backend.servicio;
import java.util.List;

import Qbiculos.Backend.modelo.Proveedor;
import Qbiculos.Backend.repositorio.ProveedorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProveedorService implements IProveedorService{
    
    @Autowired
    ProveedorRepositorio proveedorRepositorio;

    @Override
    public List<Proveedor> getProveedores() {
        return proveedorRepositorio.findAll();
    }

    @Override
    public Proveedor nuevoProveedor(Proveedor proveedor) {
        return proveedorRepositorio.save(proveedor);
    }

    @Override
    public Proveedor buscarProveedor(Integer id) {
        return proveedorRepositorio.findById(id).orElse(null);
    }

    @Override
    public void borrarProveedor(Integer id) {
        proveedorRepositorio.deleteById(id);
    }
    
}
