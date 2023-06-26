var arrNhanVien = [];
var arrInput = [
  "tknv",
  "name",
  "email",
  "password",
  "datepicker",
  "luongCB",
  "chucvu",
  "gioLam",
];

var arrNoti = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];

function themNhanVien() {
  event.preventDefault();
  var nhanVien = new NhanVien();
  console.log(nhanVien);
  var valid = true;
  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrNoti[i]);
    var giaTri = document.getElementById(arrInput[i]).value;
    console.log(giaTri);
    nhanVien[arrInput[i]] = giaTri;
  }
  valid &=
    checkDinhDangTKNV("tknv", "tbTKNV") &
    checkDingDangTenNV("name", "tbTen") &
    checkDinhDangEmail("email", "tbEmail") &
    checkDinhDangPass("password", "tbMatKhau") &
    checkDinhDangNgayLam("datepicker", "tbNgay") &
    checkDinhDangLuongCB("luongCB", "tbLuongCB") &
    checkDinhDangGioLam("gioLam", "tbGiolam");

  if (valid) {
    arrNhanVien.push(nhanVien);
    renderNhanVien();
    // document.getElementById('formNhanVien').reset();
    luuLocal();
  }
}
document.getElementById("btnThemNV").onclick = themNhanVien;

function renderNhanVien() {
  var content = "";

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    var newNhanVien = new NhanVien();

    Object.assign(newNhanVien, nhanVien);
    "password",
      "datepicker",
      "luongCB",
      "",
      "gioLam",
      (content += `
      <tr>
      <td>${newNhanVien.tknv}</td>
      <td>${newNhanVien.name}</td>
      <td>${newNhanVien.email}</td>
      <td>${newNhanVien.datepicker}</td>
      <td>${newNhanVien.chucvu}</td>
      <td>${newNhanVien.tinhTongLuong()}</td>
      <td>${newNhanVien.xepLoai()}</td>
      <td>
      <button onclick="xoaNhanVien(${
        newNhanVien.tknv
      })" class="btn btn-danger">Xoá</button>
      </td>
      </tr>
      `);
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(maNv) {
  console.log(maNv);
  
  var index = -1; 
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    // điều kiện
    if (nhanVien.tknv == maNv) {
      index = i;
    }
  }

  arrNhanVien.splice(index, 1);

  renderNhanVien();

  luuLocal();
}

function layThongTinNhanVien(maNv) {
  
  var nhanVien;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == maNv) {
      nhanVien = arrNhanVien[i];
    }
  }
  
  for (var z = 0; z < arrInput.length; z++) {
    document.getElementById(arrInput[z]).value = nhanVien[arrInput[z]];
  }
  
  document.getElementById("tknv").readOnly = true;
  document.getElementById("btnCapNhat").style.display = "inline-block";
}

function capNhatThongTinNhanVien() {
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var valueInput = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = valueInput;
  }

  
  console.log(nhanVien);
  var index = -1;
  for (var z = 0; z < arrNhanVien.length; z++) {
    if (arrNhanVien[z].tknv == nhanVien.tknv) {
      index = z;
    }
  }
  arrNhanVien[index] = nhanVien;
  
  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("tknv").readOnly = false;
  renderNhanVien();
  luuLocal();
  
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;
