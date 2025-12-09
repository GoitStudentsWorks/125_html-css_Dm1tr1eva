const form = document.querySelector('.form-support');
const inputs = form.querySelectorAll('input');
const btn = document.getElementById('send');
const textareas = form.querySelectorAll('textarea');

function checkFields() {
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  textareas.forEach(textarea => {
    if (textarea.value.trim() === '') {
      allFilled = false;
    }
  });

  btn.disabled = !allFilled;
}

inputs.forEach(input => {
  input.addEventListener('input', checkFields);
});

textareas.forEach(textarea => {
  textarea.addEventListener('input', checkFields);
});
