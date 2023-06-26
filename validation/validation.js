
function checkInputRong(idInput, idNoti) {
 
  var valueInput = document.getElementById(idInput).value;
  if (valueInput == "") {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML = "Vui lòng không để trống";
    return false;
  } else {
    document.getElementById(idNoti).innerHTML = "";
    return true;
  }
}

function checkDinhDangTKNV(idInput, idNoti) {
  var valueInput = document.getElementById(idInput).value;
  if (valueInput.length < 4 || valueInput.length > 6) {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML =
      "Tài Khoản tối đa 4-6 ký tư, không để trống";
    return false;
  } else {
    document.getElementById(idNoti).innerHTML = "";
    return true;
  }
}

function checkDingDangTenNV(idInput, idNoti) {
  var regexNumber = /^[0-9]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!regexNumber.test(valueInput) && valueInput !== "") {
    document.getElementById(idNoti).innerHTML = "";
    return true;
  } else {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML =
      "Tên nhân viên phải là chữ, không để trống";
    return false;
  }
}

function checkDinhDangEmail(idInput, idNoti) {
  var regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var valueInput = document.getElementById(idInput).value;

if (!regexEmail.test(valueInput) && valueInput !== '') {
  document.getElementById(idNoti).innerHTML = 'Email không đúng định dạng';
  return false;
} else if (regexEmail.test(valueInput) && valueInput !== '') {
  document.getElementById(idNoti).innerHTML = '';
  return true;
}
} 

function checkDinhDangPass(idInput, idNoti) {
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
  var valueInput = document.getElementById(idInput).value;
  console.log(!regex.test(valueInput))
  if (!regex.test(valueInput)) {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML =
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  } else {
    document.getElementById(idNoti).innerHTML = "";
    return true;
  }
}


function checkDinhDangNgayLam(idInput, idNoti){
  var valueInput = document.getElementById(idInput).value;
  if (valueInput == "") {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML = "Vui lòng không để trống";
    return false;
  } else {
    document.getElementById(idNoti).innerHTML = "";
    return true;
  }
}



function checkDinhDangLuongCB(idInput, idNoti) {
  var regexNumber = /^[0-9 ]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexNumber) && valueInput !== '') {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML = 'Vui lòng nhập đúng số';
    return false;
  } else if (valueInput.match(regexNumber) && valueInput !== '') {
    if ( valueInput < 1000000 || valueInput > 20000000 ) {
      document.getElementById(idNoti).style.display = "inline-block"; 
      document.getElementById(idNoti).innerHTML = 'lương cơ bản từ 1 triệu tới 20 triệu';
      return false;
    } else {
      document.getElementById(idNoti).innerHTML = '';
      return true;
      
    }
  }
}

function checkDinhDangGioLam(idInput, idNoti) {
  var regexNumber = /^[0-9 ]+$/;
  var valueInput = document.getElementById(idInput).value;
  if (!valueInput.match(regexNumber) && valueInput !== '') {
    document.getElementById(idNoti).style.display = "inline-block";
    document.getElementById(idNoti).innerHTML = 'Vui lòng nhập đúng số';
    return false;
  } else if (valueInput.match(regexNumber) && valueInput !== '') {

    if ( valueInput < 80 || valueInput > 200 ) {
      document.getElementById(idNoti).style.display = "inline-block"; 
      document.getElementById(idNoti).innerHTML = 'giờ làm từ 80 đến 200 giờ';
      return false;
    } else {
      document.getElementById(idNoti).innerHTML = '';
      return true;
      
    }
  }
}