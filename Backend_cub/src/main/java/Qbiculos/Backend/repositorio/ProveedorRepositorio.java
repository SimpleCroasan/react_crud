package Qbiculos.Backend.repositorio;


import Qbiculos.Backend.modelo.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepositorio extends JpaRepository<Proveedor, Integer> {
    
}
