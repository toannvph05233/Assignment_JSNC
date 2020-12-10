package com.vn.models;

import javax.persistence.*;

@Entity
@Table
public class LoaiSanPham {
    @Id
    private String idLoaiAcout;
    private String nameLSP;
    private Long soLuongSP;

    public LoaiSanPham() {
    }

    public LoaiSanPham(String idLoaiAcout, String nameLSP, Long soLuongSP) {
        this.idLoaiAcout = idLoaiAcout;
        this.nameLSP = nameLSP;
        this.soLuongSP = soLuongSP;
    }

    public String getIdLoaiAcout() {
        return idLoaiAcout;
    }

    public void setIdLoaiAcout(String idLoaiAcout) {
        this.idLoaiAcout = idLoaiAcout;
    }

    public String getNameLSP() {
        return nameLSP;
    }

    public void setNameLSP(String nameLSP) {
        this.nameLSP = nameLSP;
    }

    public Long getSoLuongSP() {
        return soLuongSP;
    }

    public void setSoLuongSP(Long soLuongSP) {
        this.soLuongSP = soLuongSP;
    }
}
