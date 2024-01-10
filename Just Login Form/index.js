const genderRadios = document.querySelectorAll('input[name="gender"]');
const boysOptions = document.querySelector('.boys');
const girlsOptions = document.querySelector('.girls');

document.addEventListener("DOMContentLoaded", function () {
  genderRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (radio.checked && radio.value === 'Male') {
        boysOptions.style.display = 'block';
        girlsOptions.style.display = 'none';
      } else if (radio.checked && radio.value === 'Female') {
        boysOptions.style.display = 'none';
        girlsOptions.style.display = 'block';
      } else {
        boysOptions.style.display = 'none';
        girlsOptions.style.display = 'none';
      }
    });
  });
});



