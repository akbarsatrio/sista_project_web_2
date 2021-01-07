let nim = document.getElementById("nim");
let tanggal = document.getElementById("tanggal");
let nama = document.getElementById("nama");
let jam = document.getElementById("jam");
let prodi = document.getElementById("prodi");
let seminar = document.getElementById("seminar");
let judul = document.getElementById("judul");
let pembimbing = document.getElementById("pembimbing");
let penguji1 = document.getElementById("penguji1");
let penguji2 = document.getElementById("penguji2");
let ruangan = document.getElementById("ruangan");
let password = document.getElementById("password");

function validate() {
  if (nim.value.length > 0 && nim.hasAttribute("type", "number")) {
    nim.style.borderColor = "green";
    if (tanggal.value.length > 0 && tanggal.hasAttribute("type", "date")) {
      tanggal.style.borderColor = "green";
      if (nama.value.length > 0) {
        nama.style.borderColor = "green";
        if (jam.value.length > 0 && jam.hasAttribute("type", "time")) {
          jam.style.borderColor = "green";
          if (prodi.value.length > 0) {
            prodi.style.borderColor = "green";
            if (seminar.value.length > 0) {
              seminar.style.borderColor = "green";
              if (judul.value.length > 0) {
                judul.style.borderColor = "green";
                if (pembimbing.value.length > 0) {
                  pembimbing.style.borderColor = "green";
                  if (penguji1.value.length > 0) {
                    penguji1.style.borderColor = "green";
                    if (penguji2.value.length > 0) {
                      penguji2.style.borderColor = "green";
                      if (ruangan.value.length > 0) {
                        ruangan.style.borderColor = "green";
                      } else {
                        ruangan.style.borderColor = "red";
                        ruangan.focus()
                        return false  
                      }
                    } else {
                      penguji2.style.borderColor = "red";
                      penguji2.focus()
                      return false
                    }
                  } else {
                    penguji1.style.borderColor = "red";
                    penguji1.focus()
                    return false
                  }
                } else {
                  pembimbing.style.borderColor = "red";
                  pembimbing.focus()
                  return false
                }
              } else {
                judul.style.borderColor = "red";
                judul.focus()
                return false
              }
            } else {
              seminar.style.borderColor = "red";
              seminar.focus()
              return false
            }
          } else {
            prodi.style.borderColor = "red";
            prodi.focus()
            return false
          }
        } else {
          jam.style.borderColor = "red";
          jam.focus()
          return false
        }
      } else {
        nama.style.borderColor = "red";
        nama.focus()  
        return false
      }
    } else {
      tanggal.style.borderColor = "red";
      tanggal.focus()
      return false
    }
  } else {
    nim.style.borderColor = "red";
    nim.focus()
    return false
  }

  return window.alert("Sukses Mendaftarkan Seminar TA Baru!");
}

function validate_profil() {
  if (nim.value.length > 0 && nim.hasAttribute("type", "number")) {
    nim.style.borderColor = "green";
    if (nama.value.length > 0) {
      nama.style.borderColor = "green";
      if (prodi.value.length > 0) {
        prodi.style.borderColor = "green";
        if (password.value.length > 0)
          password.style.borderColor = "green";
        else {
          password.style.borderColor = "red";
          password.focus()
          return false  
        }
      } else {
        prodi.style.borderColor = "red";
        prodi.focus()
        return false
      }
    } else {
      nama.style.borderColor = "red";
      nama.focus()  
      return false
    }
  } else {
    nim.style.borderColor = "red";
    nim.focus()
    return false
  }
  return window.alert("Berhasil mengubah data");
}

function valdiate_daftarPesertaSeminar() {
  if (nim.value.length > 0 && nim.hasAttribute("type", "number")) {
    nim.style.borderColor = "green";
    if (nama.value.length > 0) {
      nama.style.borderColor = "green";
      if (prodi.value.length > 0) {
        prodi.style.borderColor = "green";
      } else {
        prodi.style.borderColor = "red";
        prodi.focus()
        return false
      }
    } else {
      nama.style.borderColor = "red";
      nama.focus()  
      return false
    }
  } else {
    nim.style.borderColor = "red";
    nim.focus()
    return false
  }
  return window.alert("Berhasil Daftar!");
}