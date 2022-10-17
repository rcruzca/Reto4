package com.usa.reto.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "gama")
public class Gama implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idGama;
    private String name;
    private String description;

    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "gama")
    @JsonIgnoreProperties({ "messages", "reservations" })
    public List<Car> cars;

    public Integer getIdGama() {
        return idGama;
    }

    public void setIdGama(Integer id) {
        this.idGama = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

}
