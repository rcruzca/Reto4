package com.usa.reto.Service;

import com.usa.reto.Model.Score;
import com.usa.reto.Repository.RepositoryScore;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceScore {

    @Autowired
    private RepositoryScore repository;

    public List<Score> getAll() {
        return repository.getAll();
    }

    public Optional<Score> getScore(int id) {
        return repository.getScore(id);
    }

    public Score save(Score r) {
        if (r.getIdScore() == null) {
            return repository.save(r);
        } else {
            Optional<Score> rAux = repository.getScore(r.getIdScore());
            if (rAux.isEmpty()) {
                return repository.save(r);
            } else {
                return r;
            }
        }
    }

    public Score update(Score score) {
        if (score.getIdScore() != null) {
            Optional<Score> g = repository.getScore(score.getIdScore());
            if (!g.isEmpty()) {

                if (score.getMessageText() != null) {
                    g.get().setMessageText(score.getMessageText());
                }
                if (score.getStars() != null) {
                    g.get().setStars(score.getStars());
                }

                return repository.save(g.get());
            }
        }
        return score;
    }

    public boolean deleteScore(int id) {
        Boolean d = getScore(id).map(score -> {
            repository.delete(score);
            return true;
        }).orElse(false);
        return d;
    }
}