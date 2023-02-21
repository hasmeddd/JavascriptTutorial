let inputWidth;
let inputHeight;

inputWidth = prompt("Nhập chiều rộng: ")
inputHeight = prompt("Nhập chiều dài")
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let chuvi = (width + height)*2;
let dientich = width * height;

document.write("<h2>Chiều rộng: "+inputWidth+"</h2>")
document.write("<h2>Chiều dài: "+inputHeight+"</h2>")
document.write("<br>")
document.write("<h2>Chu vi: "+chuvi+"</h2>")
document.write("<br>")
document.write("<h2>Diện tích: "+dientich+"</h2>")