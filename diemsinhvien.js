let Ly;
let Hoa;
let Sinh;
let HoVaTen;
let DiemTrungBinh;
HoVaTen = prompt("Bạn tên gì: ");
Ly = prompt("Nhập điểm lý của bạn: ");
Hoa = prompt("Nhập điểm hóa của bạn: "); 
Sinh = prompt("Nhập điểm sinh của bạn: ");

DiemLy = parseInt(Ly);
DiemHoa = parseInt(Hoa);
DiemSinh = parseInt(Sinh);

DiemTrungBinh = (DiemLy + DiemHoa + DiemSinh)/3
DiemTrungBinh = parseFloat(DiemTrungBinh);
document.write("Điểm trung bình của "+HoVaTen+" là: "+DiemTrungBinh+" điểm !!!")
