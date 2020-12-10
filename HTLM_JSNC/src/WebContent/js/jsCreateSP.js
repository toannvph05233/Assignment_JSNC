var Product = function (idSanPham,idLoaiSanPham,giaSP,imgSP,nameSP) {
    this.idSanPham = idSanPham;
    this.idLoaiSanPham = idLoaiSanPham;
    this.giaSP = giaSP;
    this.imgSP = imgSP;
    this.nameSP = nameSP;
}



function createSP() {
     let idSP = document.getElementById("idSP").value;
     let idLSP = document.getElementById("idLSP").value;
     let nameSP = document.getElementById("nameSP").value;
     let giaSP = document.getElementById("giaSP").value;
     let imgSP = document.getElementById("imgSP").value;
     let product = new Product(idSP,idLSP,giaSP,imgSP,nameSP);
    alert("Xắc Nhận")
    fetch('http://localhost:8080/api/createSP', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(function (rs) {
        console.log(rs)
        window.location.href="listSP.html"
    });
}

displayTitleCreate = function () {

    document.getElementById("myModal").innerHTML = "<div class=\"modal-dialog\">\n" +
        "        <div class=\"modal-content\">\n" +
        "            <!-- Modal Header -->\n" +
        "            <div class=\"modal-header\">\n" +
        "                <h1 class=\"modal-title\" id=\"titleEditAndCreate\"></h1>\n" +
        "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
        "            </div>\n" +
        "            <!-- Modal body -->\n" +
        "            <div class=\"modal-body\">\n" +
        "                    <table class=\"col-12 table table-striped\">\n" +
        "                        <thead>\n" +
        "                        <tr>\n" +
        "                            <th>Id Sản phẩm</th>\n" +
        "                            <th>Id Loại SP</th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody>\n" +
        "                        <tr>\n" +
        "                            <td><input type=\"text\" name=\"idSP\" id=\"idSP\" value=\"\"></td>\n" +
        "                            <td><input type=\"text\" name=\"idLSP\" id=\"idLSP\" value=\"\"></td>\n" +
        "                        </tr>\n" +
        "                        </tbody>\n" +
        "                    </table>\n" +
        "                <table class=\"col-12 table table-striped\">\n" +
        "                    <thead>\n" +
        "                    <tr>\n" +
        "                        <th>Name SP</th>\n" +
        "                        <th>Giá SP</th>\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody>\n" +
        "                    <tr>\n" +
        "                        <td><input type=\"text\" name=\"nameSP\" id=\"nameSP\" value=\"\"></td>\n" +
        "                        <td><input type=\"number\" name=\"giaSP\" id=\"giaSP\" value=\"\"></td>\n" +
        "\n" +
        "                    </tr>\n" +
        "                    </tbody>\n" +
        "                </table>\n" +
        "                <table class=\"col-12 table table-striped\">\n" +
        "                    <thead>\n" +
        "                    <tr>\n" +
        "                        <th>Img</th>\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody>\n" +
        "                    <tr>\n" +
        "                        <td><input type=\"text\" name=\"imgSP\" id=\"imgSP\" value=\"img/sofaxanh.jpg\"></td>\n" +
        "                    </tr>\n" +
        "                    </tbody>\n" +
        "                </table>\n" +
        "\n" +
        "            </div>\n" +
        "            <!-- Modal footer -->\n" +
        "            <div class=\"modal-footer\">\n" +
        "                <button type=\"button\" onclick=\"createSP()\" class=\"btn btn-danger\" data-dismiss=\"modal\">Create</button>\n" +
        "                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";
    document.getElementById("titleEditAndCreate").innerText = "Create Sản Phẩm";

}
