package psi.projekt.hotel.klienci;

import jakarta.persistence.*;
import lombok.*;
import psi.projekt.hotel.rezerwacje.Rezerwacje;
import psi.projekt.hotel.uzytkownicy.Uzytkownicy;
import psi.projekt.hotel.entity.enumValue.RodzajKlienta;

import java.util.Set;

@Entity
@Table(name = "klienci")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Klienci {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String imie;
    private String nazwisko;
    private String nip;
    private String nazwaFirmy;

    @Enumerated(EnumType.STRING)
    private RodzajKlienta rodzaj;

    @OneToOne
    @JoinColumn(name = "uzytkownik_id")
    private Uzytkownicy uzytkownik;

    @OneToMany(mappedBy = "klient")
    private Set<Rezerwacje> rezerwacje;
}