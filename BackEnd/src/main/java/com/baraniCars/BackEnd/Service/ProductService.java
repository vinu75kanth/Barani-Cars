package com.baraniCars.BackEnd.Service;

import com.baraniCars.BackEnd.Module.Product;
import com.baraniCars.BackEnd.Repository.ProductRepo;
import org.antlr.v4.runtime.misc.OrderedHashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ProductService {

    private ProductRepo productRepo;

    @Autowired
    public void setProductRepo(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    private String capitalize(String string){

        String[] arr = string.split(" ");

        StringBuilder sb = new StringBuilder();

        for(String s : arr){
            sb.append(s.substring(0, 1).toUpperCase());
            sb.append(s.substring(1).toLowerCase());
            sb.append(" ");
        }

        return sb.substring(0,sb.length()-1);
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Set<String> getCarBrands() {

        List<String> allCarBrands = productRepo.getAllCarModels();
        Set<String> carBrands = new OrderedHashSet<>();

        for(String s : allCarBrands) {
            carBrands.add(capitalize(s));
        }

        return carBrands;
    }

    public Set<String> getCarModelByCarBrand(String carBrand) {

        List<String> products = productRepo.getAllCarBrandsByCarBrand(carBrand);
        Set<String> models = new OrderedHashSet<>();

        for(String s : products) {
            models.add(capitalize(s));
        }

        return models;
    }

    public Set<String> getCarSubModelByCarBrandAndCarModel(String carBrand, String carModel) {

        List<String> products = productRepo.getAllCarSubModelsByCarBrandByCarModel(carBrand, carModel);
        Set<String> subModels = new OrderedHashSet<>();

        for(String s : products) {
            subModels.add(capitalize(s));
        }

        return subModels;
    }

    public List<Product> getProductsByCarBrand(String carBrand) {
        return productRepo.findByCarBrand(carBrand);
    }

    public List<Product> getProductsByCarBrandByCarModel(String carBrand, String carModel) {
        return productRepo.findByCarBrandByCarModel(carBrand, carModel);
    }

    public List<Product> getProductsByCarBrandByCarModelByCarSubModel(String carBrand, String carModel, String carSubModel) {
        return productRepo.findByCarBrandByCarModelByCarSubModel(carBrand, carModel, carSubModel);
    }
}
