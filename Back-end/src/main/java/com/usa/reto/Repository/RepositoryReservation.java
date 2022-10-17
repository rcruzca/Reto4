package com.usa.reto.Repository;

import com.usa.reto.Model.Reservation;
import com.usa.reto.Repository.Crud.RepositoryCrudReservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositoryReservation {
    
    @Autowired
    private RepositoryCrudReservation repository;

    public List<Reservation> getAll(){
        return (List<Reservation>) repository.findAll();
    }
    
    public Optional<Reservation> getReservation(int id){
        return repository.findById(id);
    }
    
    public Reservation save(Reservation reservation){
        return repository.save(reservation);
    }
    
    public void delete(Reservation reservation){
        repository.delete(reservation);
    }
}