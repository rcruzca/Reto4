package com.usa.reto.Service;

import com.usa.reto.Model.Car;
import com.usa.reto.Repository.RepositoryCar;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceCar {

    @Autowired
    private RepositoryCar repository;

    public List<Car> getAll() {
        return repository.getAll();
    }

    public Optional<Car> getCar(int id) {
        return repository.getCar(id);
    }

    public Car save(Car c) {
        if (c.getIdCar() == null) {
            return repository.save(c);
        } else {
            Optional<Car> cAux = repository.getCar(c.getIdCar());
            if (cAux.isEmpty()) {
                return repository.save(c);
            } else {
                return c;
            }
        }
    }

    public Car update(Car car) {
        if (car.getIdCar() != null) {
            Optional<Car> g = repository.getCar(car.getIdCar());
            if (!g.isEmpty()) {
                if (car.getBrand() != null) {
                    g.get().setBrand(car.getBrand());
                }
                if (car.getName() != null) {
                    g.get().setName(car.getName());
                }
                if (car.getYear() != null) {
                    g.get().setYear(car.getYear());
                }
                if (car.getDescription() != null) {
                    g.get().setDescription(car.getDescription());
                }
                return repository.save(g.get());
            }
        }
        return car;
    }

    public boolean deleteCar(int id) {
        Boolean d = getCar(id).map(car -> {
            repository.delete(car);
            return true;
        }).orElse(false);
        return d;
    }

}
