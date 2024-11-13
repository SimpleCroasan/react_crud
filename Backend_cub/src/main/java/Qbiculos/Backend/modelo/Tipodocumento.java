package Qbiculos.Backend.modelo;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name=Tipodocumento.TABLE_NAME)
public class Tipodocumento {

    public static final String TABLE_NAME = "tipodocumento";
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id_tipodocumento;

    @Column(name = "tipo")
    private String tipo;
    
    // Constructor

    public Tipodocumento() {
    }

    public Tipodocumento(Long id_tipodocumento, String tipo) {
        this.id_tipodocumento = id_tipodocumento;
        this.tipo = tipo;
    }

    

    public Long getId_tipodocumento() {
        return id_tipodocumento;
    }

    public void setId_tipodocumento(Long id_tipodocumento) {
        this.id_tipodocumento = id_tipodocumento;
    }


    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}
