package com.vn.repositorys.impl;

import com.vn.models.Product;
import javax.persistence.*;
import java.util.List;

public class searchSPRepo implements ISearchSPRepo {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Product> findByTensanpham(String name) {
        TypedQuery<Product> query = (TypedQuery<Product>) entityManager.createQuery("from Product where nameSP like '%" + name + "%'");
//        query.setParameter("email", name);
        try {
            return query.getResultList();
        } catch (NoResultException n) {
            return null;
        }
    }
}
