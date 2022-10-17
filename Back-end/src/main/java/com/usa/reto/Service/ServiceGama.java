package com.usa.reto.Service;

import com.usa.reto.Model.Gama;
import com.usa.reto.Repository.RepositoryGama;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceGama {

    @Autowired
    private RepositoryGama repository;

    public List<Gama> getAll() {
        return repository.getAll();
    }

    public Optional<Gama> getGama(int id) {
        return repository.getGama(id);
    }

    public Gama save(Gama c) {
        if (c.getIdGama() == null) {
            return repository.save(c);
        } else {
            Optional<Gama> cAux = repository.getGama(c.getIdGama());
            if (cAux.isEmpty()) {
                return repository.save(c);
            } else {
                return c;
            }
        }
    }

    public Gama update(Gama gama) {
        if (gama.getIdGama() != null) {
            Optional<Gama> g = repository.getGama(gama.getIdGama());
            if (!g.isEmpty()) {

                if (gama.getName() != null) {
                    g.get().setName(gama.getName());
                }

                if (gama.getDescription() != null) {
                    g.get().setDescription(gama.getDescription());
                }
                return repository.save(g.get());
            }
        }
        return gama;
    }

    public boolean deleteGama(int id) {
        Boolean d = getGama(id).map(gama -> {
            repository.delete(gama);
            return true;
        }).orElse(false);
        return d;
    }
}