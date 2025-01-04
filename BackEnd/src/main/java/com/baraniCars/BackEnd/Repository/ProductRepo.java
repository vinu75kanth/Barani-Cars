package com.baraniCars.BackEnd.Repository;

import com.baraniCars.BackEnd.Module.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface ProductRepo extends JpaRepository<Product, Integer> {

    @Query("select distinct(p.carBrand) from Product p order by trim(lower(p.carBrand)) asc")
    List<String> getAllCarModels();

    @Query("select distinct(p.carModel) from Product p where p.carBrand = :carBrand")
    List<String> getAllCarBrandsByCarBrand(String carBrand);

    @Query("select distinct(p.carSubModel) from Product p where p.carBrand = :carBrand and p.carModel = :carModel")
    List<String> getAllCarSubModelsByCarBrandByCarModel(String carBrand,String carModel);

    @Query("select p from Product p where p.carBrand = :carBrand")
    List<Product> findByCarBrand(String carBrand);

    @Query("select p from Product p where p.carBrand = :carBrand and p.carModel = :carModel")
    List<Product> findByCarBrandByCarModel(String carBrand, String carModel);

    @Query("select p from Product p where p.carBrand = :carBrand and p.carModel = :carModel and p.carSubModel = :carSubModel")
    List<Product> findByCarBrandByCarModelByCarSubModel(String carBrand, String carModel, String carSubModel);
}
