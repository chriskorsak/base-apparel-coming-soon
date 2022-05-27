const form = document.querySelector('#add-email');
const emailInput = document.querySelector('#email-input');
const errorIcon = document.querySelector('.error-icon');
const message = document.querySelector('.message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!emailIsValid(emailInput.value)) {
    message.textContent = 'Please provide a valid email';
    errorIcon.style.display = 'block';
    emailInput.classList.add('error-border');
  } else {
    message.textContent = `${emailInput.value} was added to our mailing list. Thank you!`;
    errorIcon.style.display = 'none';
    emailInput.classList.remove('error-border');
  }
  //clear out form
  emailInput.value = '';
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
