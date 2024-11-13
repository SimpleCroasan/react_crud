
package Qbiculos.Backend.repositorio;


import Qbiculos.Backend.modelo.Tipodocumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipodocumentoRepositorio extends JpaRepository<Tipodocumento, Long> {
    
}
