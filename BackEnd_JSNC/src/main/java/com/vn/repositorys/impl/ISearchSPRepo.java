package com.vn.repositorys.impl;

import com.vn.models.Product;

import java.util.List;

public interface ISearchSPRepo {
    public List<Product> findByTensanpham(String name);
}
