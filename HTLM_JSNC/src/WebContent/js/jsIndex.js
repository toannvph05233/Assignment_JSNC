var displaySP = document.getElementById('displaySP');
var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
if (listGioHang == null){
    listGioHang = [];
}
var listSP = [];
fetch('http://localhost:8080/api/listSP', {
    method: "GET"
}).then(function (rs) {
    return rs.json(); // phần này xử lý chuyển đổi dữ liệu trả về thành json
})
    .then(function (data) {
        var arrSP1 = [];
        var str1 = '';
        // đến đây có dữ liệu dạng json, có thể dùng làm mọi việc.
        // duyệt mảng
        arrSP1 = data;
        listSP = data;
        console.log( "listSP = " + listSP);
        for (let i = 0; i < arrSP1.length; i++) {
            str1 += `<div class="col-xs-12 col-sm-6 col-md-4 ">
                <img src=" ${arrSP1[i].imgSP} " height="300" width="470"/>
                <h3> ${arrSP1[i].nameSP} </h3>
                <p> ${arrSP1[i].giaSP}</p>
                <button type="button" onclick="addGioHang('${arrSP1[i].idSanPham}')" class="btn btn-outline-info">Add giỏ hàng</button>
                </div>`
        }

        displaySP.innerHTML = str1;
    });

function addGioHang(id) {
    console.log("id = " + id)
    for (let i = 0; i < listSP.length; i++) {
        if (id == listSP[i].idSanPham) {
            console.log(listSP[i]);
            listGioHang.push(listSP[i]);
            alert("add thành công")
        }
    }
    localStorage.setItem("listGioHang", JSON.stringify(listGioHang));
}

function searchSP() {
    let search = document.querySelector("#myInput").value;
    let str = "";
    if (search === "") {
        document.getElementById("displaySearch").innerHTML = "";
    } else {
        fetch('http://localhost:8080/api/searchSP/' + search, {
            method: "GET"
        }).then(function (rs) {
            return rs.json();
        })
            .then(function (data) {

                for (let i = 0; i < data.length; i++) {
                    str += `<a href="#">${data[i].nameSP}</a><br>`
                }

                document.getElementById("displaySearch").innerHTML = str;


            });
    }
}
