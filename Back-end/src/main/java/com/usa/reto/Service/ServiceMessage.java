package com.usa.reto.Service;

import com.usa.reto.Model.Message;
import com.usa.reto.Repository.RepositoryMessage;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceMessage {

    @Autowired
    private RepositoryMessage repository;

    public List<Message> getAll() {
        return repository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return repository.getMessage(id);
    }

    public Message save(Message m) {
        if (m.getIdMessage() == null) {
            return repository.save(m);
        } else {
            Optional<Message> mAux = repository.getMessage(m.getIdMessage());
            if (mAux.isEmpty()) {
                return repository.save(m);
            } else {
                return m;
            }
        }
    }

    public Message update(Message message) {
        if (message.getIdMessage() != null) {
            Optional<Message> g = repository.getMessage(message.getIdMessage());
            if (!g.isEmpty()) {

                if (message.getMessageText() != null) {
                    g.get().setMessageText(message.getMessageText());
                }

                return repository.save(g.get());
            }
        }
        return message;
    }

    public boolean deleteMessage(int id) {
        Boolean d = getMessage(id).map(message -> {
            repository.delete(message);
            return true;
        }).orElse(false);
        return d;
    }
}