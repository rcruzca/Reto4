package com.usa.reto.Controller;

import com.usa.reto.Model.Message;
import com.usa.reto.Service.ServiceMessage;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Message")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class ControllerMessage {

    @Autowired
    private ServiceMessage service;

    @GetMapping("/all")
    public List<Message> getMessage() {
        return service.getAll();
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Message message) {
        service.save(message);
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessage(@PathVariable("id") int id) {
        return service.getMessage(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public void update(@RequestBody Message message) {
        service.update(message);
    }

    @DeleteMapping("/{id}")
    public boolean deleteMessage(@PathVariable("id") int id) {
        return service.deleteMessage(id);
    }
}
