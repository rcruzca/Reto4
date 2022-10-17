package com.usa.reto.Repository;

import com.usa.reto.Model.Gama;
import com.usa.reto.Repository.Crud.RepositoryCrudGama;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositoryGama {

    @Autowired
    private RepositoryCrudGama gamarepository;

    public List<Gama> getAll() {
        return (List<Gama>) gamarepository.findAll();
    }

    public Optional<Gama> getGama(int id) {
        return gamarepository.findById(id);
    }

    public Gama save(Gama gama) {
        return gamarepository.save(gama);
    }

    public void delete(Gama gama) {
        gamarepository.delete(gama);
    }
}