package psi.projekt.hotel.platnosci;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import psi.projekt.hotel.rezerwacje.Rezerwacje;

import java.util.Date;
import java.util.Set;

@Table(name = "Platnosci")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Platnosci {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String metodaPlatnosci;
    private String statusPlatnosci;
    private int kwota;
    private Date dataPlatnosci;

    @OneToMany(mappedBy = "platnosc", cascade = CascadeType.ALL)
    private Set<Rezerwacje> rezerwacje;
}
