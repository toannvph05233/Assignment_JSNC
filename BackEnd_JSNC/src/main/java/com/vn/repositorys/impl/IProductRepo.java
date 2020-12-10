package com.vn.repositorys.impl;

import com.vn.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface IProductRepo extends CrudRepository<Product,Long> {
    public Product findByIdSanPham(String id);
}
