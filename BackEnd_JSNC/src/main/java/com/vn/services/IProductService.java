package com.vn.services;

import com.vn.models.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();

    Product findById(String id);

    void save(Product object);

    void remove(Product object);

   List<Product> findByName(String name);
}
