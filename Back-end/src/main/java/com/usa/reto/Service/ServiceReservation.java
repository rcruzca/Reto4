package com.usa.reto.Service;

import com.usa.reto.Model.Reservation;
import com.usa.reto.Repository.RepositoryReservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceReservation {

    @Autowired
    private RepositoryReservation repository;

    public List<Reservation> getAll() {
        return repository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return repository.getReservation(id);
    }

    public Reservation save(Reservation r) {
        if (r.getIdReservation() == null) {
            return repository.save(r);
        } else {
            Optional<Reservation> rAux = repository.getReservation(r.getIdReservation());
            if (rAux.isEmpty()) {
                return repository.save(r);
            } else {
                return r;
            }
        }
    }

    public Reservation update(Reservation reservation) {
        if (reservation.getIdReservation() != null) {
            Optional<Reservation> g = repository.getReservation(reservation.getIdReservation());
            if (!g.isEmpty()) {

                if (reservation.getDevolutionDate() != null) {
                    g.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if (reservation.getStartDate() != null) {
                    g.get().setStartDate(reservation.getStartDate());
                }
                if (reservation.getStatus() != null) {
                    g.get().setStatus(reservation.getStatus());
                }

                return repository.save(g.get());
            }
        }
        return reservation;
    }

    public boolean deleteReservation(int id) {
        Boolean d = getReservation(id).map(reservation -> {
            repository.delete(reservation);
            return true;
        }).orElse(false);
        return d;
    }
}