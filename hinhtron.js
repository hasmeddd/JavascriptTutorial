let input_bankinh;
input_bankinh = prompt("Nhập bán kính hình tròn: ")
let BanKinh = parseInt(input_bankinh);
let ChuVi;
let DienTich;

ChuVi = (BanKinh*2)*Math.PI;
DienTich = (Math.pow(BanKinh,2))*Math.PI;

document.write("<h2>Bán kính hình tròn: "+BanKinh+"</h2>")
document.write("<br>")
document.write("<h2>Chu vi hình tròn: "+ChuVi+"</h2>")
document.write("<br>")
document.write("<h2>Diện tích hình tròn: "+DienTich+"</h2>")
