const form = document.querySelector('.form-support');
const inputs = form.querySelectorAll('input');
const btn = document.getElementById('send');

function checkFields() {
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  btn.disabled = !allFilled;
}

inputs.forEach(input => {
  input.addEventListener('input', checkFields);
});
