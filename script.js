var datos = document.getElementsByClassName('input');
for (var i = 0; i < datos.length; i++) {
  datos[i].addEventListener('keyup', function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}


