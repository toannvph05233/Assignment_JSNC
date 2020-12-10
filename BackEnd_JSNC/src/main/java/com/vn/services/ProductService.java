package com.vn.services;

import com.vn.models.Product;
import com.vn.repositorys.impl.IProductRepo;
import com.vn.repositorys.impl.ISearchSPRepo;
import com.vn.repositorys.impl.searchSPRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductService implements IProductService {
    @Autowired
    IProductRepo iProductRepo;

    @Autowired
    ISearchSPRepo iSearchSPRepo;

    @Override
    public List<Product> findAll() {
        return ((List<Product>) iProductRepo.findAll());
    }

    @Override
    public Product findById(String id) {
        return iProductRepo.findByIdSanPham(id);
    }

    public List<Product> findByName(String name) {
        return iSearchSPRepo.findByTensanpham(name);
    }

    @Override
    public void save(Product object) {
        iProductRepo.save(object);
    }

    @Override
    public void remove(Product object) {
        iProductRepo.delete(object);
    }
}
