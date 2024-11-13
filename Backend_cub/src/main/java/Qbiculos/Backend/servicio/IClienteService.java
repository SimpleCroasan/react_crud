/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Qbiculos.Backend.servicio;

import Qbiculos.Backend.modelo.Cliente;

import java.util.List;

/**
 *
 * @author Usuario
 */
public interface IClienteService {
    
    //Listar todos los Clientes
    List<Cliente> getClientes();

    // Buscar cliente por id
    public Cliente getCliente(Long id);
    
    // Guardar un cliente
    public Cliente grabarCliente(Cliente cliente);
    
    // Eliminar un cliente
    public void delete(Long id);
    
    
}
