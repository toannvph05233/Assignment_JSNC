function editSP() {
    let idSP = document.getElementById("idSP").value;
    let idLSP = document.getElementById("idLSP").value;
    let nameSP = document.getElementById("nameSP").value;
    let giaSP = document.getElementById("giaSP").value;
    let imgSP = document.getElementById("imgSP").value;
    let product = new Product(idSP,idLSP,giaSP,imgSP,nameSP);
    alert("Xắc Nhận Edit")
    fetch('http://localhost:8080/api/editSP', {
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
displayEdit = function (index) {
    document.getElementById("myModal").innerHTML = `<div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h1 class="modal-title" id="titleEditAndCreate"></h1>
                <button type="button" class="close" data-dismiss="modal">×</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
                    <table class="col-12 table table-striped">
                        <thead>
                        <tr>
                            <th>Id Sản phẩm</th>
                            <th>Id Loại SP</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="text" name="idSP" id="idSP" value="${arrSP[index].idSanPham}"></td>
                            <td><input type="text" name="idLSP" id="idLSP" value="${arrSP[index].idLoaiSanPham}"></td>
                        </tr>
                        </tbody>
                    </table>
                <table class="col-12 table table-striped">
                    <thead>
                    <tr>
                        <th>Name SP</th>
                        <th>Giá SP</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" name="nameSP" id="nameSP" value="${arrSP[index].nameSP}"></td>
                        <td><input type="number" name="giaSP" id="giaSP" value="${arrSP[index].giaSP}"></td>

                    </tr>
                    </tbody>
                </table>
                <table class="col-12 table table-striped">
                    <thead>
                    <tr>
                        <th>Img</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" name="imgSP" id="imgSP" value="${arrSP[index].imgSP}"></td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" onclick="editSP()" class="btn btn-danger" data-dismiss="modal">Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>`;
    document.getElementById("titleEditAndCreate").innerText = "Edit Sản Phẩm";

}

