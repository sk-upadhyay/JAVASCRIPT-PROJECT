const gender = document.querySelectorAll('input[name="gender"]');
const boysoptions = document.querySelector('.option-boys');
const girlsoptions = document.querySelector('.option-girls');

document.addEventListener("DOMContentLoaded", function () {
  gender.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (radio.checked && radio.value.toLowerCase() === 'male') {
        boysoptions.style.display = 'block';
        girlsoptions.style.display = 'none';
      } else if (radio.checked && radio.value.toLowerCase() === 'female') {
        boysoptions.style.display = 'none';
        girlsoptions.style.display = 'block';
      } else {
        boysoptions.style.display = 'none';
        girlsoptions.style.display = 'none';
      }
    });
  });
});



