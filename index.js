var t = "cybersoft";
t = "cybersoft";
window.t = 'cybersoft'; // 3 cách khai báo trên bằng nhau
//không cần khai báo thì mặc định sẽ hiểu là khai báo bằng var

let title ="Cybersoft";

{
    let title = "cybersoft 1";
    console.log(title);
}

//var: hoạt động trên tất cả các scope, let hoạt động trong từng scope ( thường dùng let trong mọi ngữ cảnh)
// const, không gán lại được giá trị khác ( dùng cho các biến config hệ thống như domain, tên token... hoặc function)
const tieude = 'cybersoft';
const hocVien1 = {ma: 1, ten:" asfd"};
hocVien1.ma = 2;
hocVien1.ten = 'tên mới';
//khai báo từ hóa const thì không thể gán cho nó vùng nhớ mới được, nhưng có thẻ trở tới vùng nhớ đó và thay đổi giá trị trong vùng nhớ đó

//--------------------- arrow function

// es5 : function đại diện cho hàm, phương thức( phương thức cũng là hàm, nhưng chỉ xài cho đối tượng đó), lớp đối tượng

const showMessage = function  (mess){
    alert(mess);
}

//es6 ----
const showArrfunc = (mess) => {alert(mess)};

const test = function (){
    return "ok";
}
const test2 = () => 'ok';

const apiThemHocVien = "http://cybersoft.vn/api/themhocvien";
const apiXoaHocVien = "http//cybersoft.vn/api/xoahocvien";

const getApi = urlName => "http//cybersoft.vn/api/" + urlName;

getApi('themhocvien');
getApi('xoahocvien');

// ngữ cảnh con trỏ this
let hocVien = {
    hoTen: "nguyễn Văn A",
    lop: "FE39",
    layThongTinHocVien : function() {
        var hienThiThongTin = function() {
            console.log('họ tên:' + this.hoTen)
            console.log('lớp:' + this.lop);
        }
        hienThiThongTin();
    }
}
hocVien.layThongTinHocVien();
//nếu con trỏ this này ra 1 cấp mà không phải là đối tượng hoặc lớp đối tượng thì nó sẽ hiểu là window

let hocVien2 = {
    hoTen: "nguyễn Văn A",
    lop: "FE39",
    layThongTinHocVien : function () {
        hienThiThongTin = () => {
            console.log('họ tên:' + this.hoTen)
            console.log('lớp:' + this.lop);
        }
        hienThiThongTin();
    }
}
//nếu sử dụng arrow function thì nó sẽ thực hiện như function nhưng con trỏ this đó nó sẽ không hiểu arrow function là function


//restparam;


//kiểu dữ liệu cơ sở
//sinh viên vùng nhớ được quản lý bởi con trỏ //  nếu cấp phát như kiểu dữ liệu cơ sở thì sẽ tốn vùng nhớ
var tinhTong = function(a,b){
    console.log(a,b);
}
var tinhTong = function(a,b,c){
    console.log(a,b,c);
}

var aa = 5;
var bb = aa;
bb = 10;

