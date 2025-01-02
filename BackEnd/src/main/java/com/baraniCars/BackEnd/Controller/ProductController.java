package com.baraniCars.BackEnd.Controller;

import com.baraniCars.BackEnd.Module.Product;
import com.baraniCars.BackEnd.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
public class ProductController {

    private ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public String home() {
        return "Hello World";
    }

    @GetMapping("/products")
    public List<Product> getProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/getAllCarBrands")
    public Set<String> getAllCarBrands(){
        return productService.getAllCarBrands();
    }

    @GetMapping("/getCarModelByCarBrand")
    public Set<String> getCarModelByCarBrand(@RequestParam String carBrand){
        return productService.getCarModelByCarBrand(carBrand);
    }

    @GetMapping("/getCarSubModelByCarBrandAndCarModel")
    public Set<String> getCarSubModelByCarBrandAndCarModel(@RequestParam String carBrand, @RequestParam String carModel){
        return productService.getCarSubModelByCarBrandAndCarModel(carBrand, carModel);
    }

    @GetMapping("/getProductByCarBrandCarModelCarSubModel")
    public List<Product> getProductByCarBrandCarModelCarSubModel(@RequestParam String carBrand, @RequestParam String carModel, @RequestParam String carSubModel){
        return productService.getProductByCarBrandCarModelCarSubModel(carBrand,carModel,carSubModel);
    }
}
