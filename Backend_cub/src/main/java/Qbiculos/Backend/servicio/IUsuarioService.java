package Qbiculos.Backend.servicio;

import java.util.List;

import Qbiculos.Backend.modelo.LoginDto;
import Qbiculos.Backend.modelo.Usuario;
import Qbiculos.Backend.modelo.UsuarioDto;
import org.springframework.http.ResponseEntity;

public interface IUsuarioService {

    List<Usuario> getUsuarios();

    Usuario nuevoUsuario(UsuarioDto usuarioDto);

    Usuario buscarUsuario(Long id);

    int borrarUsuario(Long id);

    int login(LoginDto usuarioDto);

    ResponseEntity<?> ingresar(LoginDto usuarioDto);
    
}
