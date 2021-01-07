function validasi(){
  let username = document.forms['myForm']['username'].value;
  let password = document.forms['myForm']['password'].value;
  if (username == 'user' && password == '12345') {
    alert("Username atau password yang Anda masukan Benar");
    window.location.href = "home_user.html";

    // tambahin return false aja biar method dri formnya ga kepakai
    return false
  } else if (username == "admin" && password == "12345") {
    window.location.href = "admin_home.html";

    // tambahin return false aja biar method dri formnya ga kepakai
    return false
  } else {
    alert("Username atau password yang Anda masukan Tidak ada");
    return false
  }
}

function cekRegister() {
  let nama = document.forms['register']['nama'];
  let nim = document.forms['register']['nim'];
  let username = document.forms['register']['username'];
  let password = document.forms['register']['password'];
  
  if (nama.value.length > 0 && nama.hasAttribute("type", "text")) {
    nama.style.borderColor = "green";
    if (nim.value.length > 0 && nim.hasAttribute("type", "number")) {
      nim.style.borderColor = "green";
      if (username.value.length > 0 && username.hasAttribute("type", "text")) {
        username.style.borderColor = "green";
        if (password.value.length > 0 && password.hasAttribute("type", "password")) {
          password.style.borderColor = "green";
          window.location.href = "home_user.html";
        } else {
          password.style.borderColor = "red";
          password.focus()
        }
      } else {
        username.style.borderColor = "red";
        username.focus()
      }
    } else {
      nim.style.borderColor = "red";
      nim.focus()
    }
  } else {
    nama.style.borderColor = "red";
    nama.focus()
  }
}