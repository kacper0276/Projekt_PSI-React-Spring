package psi.projekt.hotel.platnosci;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlatnosciRepository extends JpaRepository<Platnosci, Integer> {
    Optional<Platnosci> findById(Integer id);
}
