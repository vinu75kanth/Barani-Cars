package com.baraniCars.BackEnd.Repository;

import com.baraniCars.BackEnd.Module.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface ProductRepo extends JpaRepository<Product, Integer> {

}
