var arrSP = [];
var str = '';
var displaySP = document.getElementById('displaySP');
fetch('http://localhost:8080/api/listSP', {
    method: "GET"
}).then(function (rs) {
    return rs.json(); // phần này xử lý chuyển đổi dữ liệu trả về thành json
})
    .then(function (data) {
        // đến đây có dữ liệu dạng json, có thể dùng làm mọi việc.
        // duyệt mảng
        arrSP = data;
        console.log(arrSP);
        for (let i = 0; i < arrSP.length; i++) {
            str += `       <tr>
            <td>${arrSP[i].idSanPham}</td>
            <td>${arrSP[i].idLoaiSanPham}</td>
            <td>${arrSP[i].nameSP}</td>
            <td>${arrSP[i].giaSP}</td>
            <td>${arrSP[i].dateNhap}</td>
            <td><img src="${arrSP[i].imgSP}" height="50" width="50"/></td>
            <td><button onclick="displayEdit(${i})" data-toggle="modal" data-target="#myModal"> Edit</a></td>
            <td><button onclick="deleteSP('${arrSP[i].idSanPham}')"> Delete</button></td>
        </tr>`
        }
        displaySP.innerHTML = str;
    });

function deleteSP(id) {
    var result = confirm("Want to delete?");
    if (result) {
        fetch('http://localhost:8080/api/deleteSP/'+id, {
            method: 'POST'
        }).then(function (rs) {
            console.log(rs)
            window.location.href="listSP.html"
        });
    }
}
