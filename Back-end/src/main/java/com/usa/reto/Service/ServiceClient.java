package com.usa.reto.Service;

import com.usa.reto.Model.Client;
import com.usa.reto.Repository.RepositoryClient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceClient {

    @Autowired
    private RepositoryClient repository;

    public List<Client> getAll() {
        return repository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return repository.getClient(id);
    }

    public Client save(Client c) {
        if (c.getIdClient() == null) {
            return repository.save(c);
        } else {
            Optional<Client> cAux = repository.getClient(c.getIdClient());
            if (cAux.isEmpty()) {
                return repository.save(c);
            } else {
                return c;
            }
        }
    }

    public Client update(Client client) {
        if (client.getIdClient() != null) {
            Optional<Client> g = repository.getClient(client.getIdClient());
            if (!g.isEmpty()) {
                if (client.getEmail() != null) {
                    g.get().setEmail(client.getEmail());
                }
                if (client.getName() != null) {
                    g.get().setName(client.getName());
                }
                if (client.getPassword() != null) {
                    g.get().setPassword(client.getPassword());
                }
                if (client.getAge() != null) {
                    g.get().setAge(client.getAge());
                }
                return repository.save(g.get());
            }
        }
        return client;
    }

    public boolean deleteClient(int id) {
        Boolean d = getClient(id).map(client -> {
            repository.delete(client);
            return true;
        }).orElse(false);
        return d;
    }
}