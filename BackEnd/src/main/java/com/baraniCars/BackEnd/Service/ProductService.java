package com.baraniCars.BackEnd.Service;

import com.baraniCars.BackEnd.Module.Product;
import com.baraniCars.BackEnd.Repository.ProductRepo;
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

    public String capitalize(String string){
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

    public Set<String> getAllCarBrands() {
        List<Product> products = productRepo.findAll();
        Set<String> brands = new HashSet<>();
        for (Product product : products) {
            brands.add(capitalize(product.getCarBrand()));
        }
        return brands;
    }

    public Set<String> getCarModelByCarBrand(String carBrand) {
        List<Product> products = productRepo.findAll();
        Set<String> models = new HashSet<>();
        for (Product product : products) {
            if(product.getCarBrand().compareToIgnoreCase(carBrand) == 0) {
                models.add(capitalize(product.getCarModel()));
            }
        }
        return models;
    }

    public Set<String> getCarSubModelByCarBrandAndCarModel(String carBrand, String carModel) {

        List<Product> products = productRepo.findAll();
        Set<String> subModels = new HashSet<>();

        for (Product product : products) {
            if(product.getCarBrand().compareToIgnoreCase(carBrand) == 0 && product.getCarModel().compareToIgnoreCase(carModel) == 0) {
                subModels.add(capitalize(product.getCarSubModel()));
            }
        }

        return subModels;
    }

    public List<Product> getProductByCarBrandCarModelCarSubModel(String carBrand, String carModel, String carSubModel) {

        List<Product> products = productRepo.findAll();
        List<Product> filteredProducts = new ArrayList<>();

        for (Product product : products) {
            if(         (product.getCarBrand().compareToIgnoreCase(carBrand) == 0)
                    &&  (product.getCarModel().compareToIgnoreCase(carModel) == 0)
                    &&  product.getCarSubModel().compareToIgnoreCase(carSubModel) == 0) {
                filteredProducts.add(product);
            }
        }

        return filteredProducts;
    }
}
