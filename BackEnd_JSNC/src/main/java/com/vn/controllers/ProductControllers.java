package com.vn.controllers;

import com.vn.models.Product;
//import com.vn.repositorys.impl.searchSPRepo;
import com.vn.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ProductControllers {
    @Autowired
    IProductService iProductService;

    @GetMapping("/api/listSP")
    public ResponseEntity<List<Product>> getListUser() {
        List<Product> detailCategoryList = (List<Product>) iProductService.findAll();
        return new ResponseEntity<>(detailCategoryList, HttpStatus.OK);
    }

    @PostMapping("/api/createSP")
    public ResponseEntity createSP(@RequestBody Product product) {
        long millis = System.currentTimeMillis();
        java.sql.Date date = new java.sql.Date(millis);
        System.out.println(date);
        product.setDateNhap(date);
        System.out.println(product.toString());
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/editSP/{id}")
    public ResponseEntity<Product> getEditSP(@PathVariable String id) {
        Product product = iProductService.findById(id);
        System.out.println(product.toString());
        return new ResponseEntity(product, HttpStatus.OK);
    }

    @PostMapping("/api/editSP")
    public ResponseEntity<Product> EditSP(@RequestBody Product product) {
        long millis = System.currentTimeMillis();
        java.sql.Date date = new java.sql.Date(millis);
        System.out.println(date);
        product.setDateNhap(date);
        System.out.println(product.toString());
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/api/deleteSP/{id}")
    public ResponseEntity getDeleteSP(@PathVariable String id) {
        Product product = iProductService.findById(id);
        iProductService.remove(product);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/api/searchSP/{name}")
    public ResponseEntity<List<Product>> searchSP(@PathVariable String name) {
        List<Product> productList = iProductService.findByName(name);
        return new ResponseEntity(productList, HttpStatus.OK);
    }
}
