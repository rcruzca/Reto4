package com.usa.reto.Repository;

import com.usa.reto.Model.Car;
import com.usa.reto.Repository.Crud.RepositoryCrudCar;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositoryCar {

    @Autowired
    private RepositoryCrudCar repository;

    public List<Car> getAll() {
        return (List<Car>) repository.findAll();
    }

    public Optional<Car> getCar(int id) {
        return repository.findById(id);
    }

    public Car save(Car car) {
        return repository.save(car);
    }

    public void delete(Car car) {
        repository.delete(car);
    }
}