function NhanVien() {
  this.tknv = "",
    this.name = "",
    this.email = "",
    this.password = "",
    this.datepicker = "",
    this.luongCB = 0,
    this.chucvu = "",
    this.gioLam = 0,
    this.tinhTongLuong = function () {
        var heSo = 1;
        if(this.chucvu == "sep"){
            heSo = 3;
        }else if(this.chucvu == "truongPhong"){
            heSo = 2;
        }
      return this.luongCB * heSo;
    };
  this.xepLoai = function () {

    if (this.gioLam >= 192) {
      return (xepLoai = "Nhân viên xuất sắc");
    } else if (this.gioLam >= 176) {
      return (xepLoai = "Nhân viên giỏi");
    } else if (this.gioLam >= 160) {
      return (xepLoai = "Nhân viên khá");
    } else {
      return (xepLoai = "Nhân viên trung bình");
    }
  };
}
