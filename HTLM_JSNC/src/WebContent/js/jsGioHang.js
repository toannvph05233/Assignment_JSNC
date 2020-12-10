let listGioHang2 = JSON.parse(localStorage.getItem("listGioHang"));

function showGioHang() {
    let str = '';
    console.log(listGioHang2)
    for (let i = 0; i < listGioHang2.length; i++) {
        str += `<tr>
           
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-3 hidden-xs"><img
                            src="${listGioHang2[i].imgSP}"
                            alt="Sản phẩm 1" class="img-responsive" width="100">
                    </div>
                    <div class="col-sm-9">
                        <h4 class="nomargin">${listGioHang2[i].nameSP}</h4>
                        <p>${listGioHang2[i].dateNhap}</p>
                    </div>
                </div>
            </td>
         
            <td data-th="Price">${listGioHang2[i].giaSP}</td>
            <td data-th="Quantity"><input class="form-control text-center" onchange="changeaMount(${i},${listGioHang2[i].giaSP})" value="1" type="number" id="amount${i}">
            </td>
            <td data-th="Subtotal" class="text-center" id="${i}">${listGioHang2[i].giaSP}</td>
            <td class="actions" data-th="">
               <button onclick="deleteGH('${listGioHang2[i].idSanPham}')" class="btn btn-danger btn-sm"></i>Delete</button>
            </td>
        </tr>
`
    }
    document.getElementById("showGioHang").innerHTML = str;
    sumPrice()

}

showGioHang();

function sumPrice() {
    let sum = 0;
    for (let i = 0; i < listGioHang2.length; i++) {
        sum += parseInt(document.getElementById(i).innerText);
        console.log(sum)
    }
    document.getElementById("tutolPrice").innerText = sum;
}

function deleteGH(id) {
    for (let i = 0;i<listGioHang2.length;i++){
        if (id == listGioHang2[i].idSanPham){
            listGioHang2.splice(i,1);
        }
    }
    localStorage.setItem("listGioHang",JSON.stringify(listGioHang2));
    location.reload();
}

function changeaMount(index,price) {
    let amount = parseInt(document.getElementById("amount"+index).value);
    if (amount>0){
        document.getElementById(index).innerText = amount*price;
    }else {
        document.getElementById(index).innerText = 0;
    }
    sumPrice();
}
