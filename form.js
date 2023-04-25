const form = document.querySelector('.fields');
const emailInput = form.elements.email;
const EmailmessageError = document.querySelector('.email__error');

form.addEventListener('submit', (event) => {
  const emailRegex = (/[A-Z]/);
  if (emailRegex.test(emailInput.value)) {
    event.preventDefault();
    EmailmessageError.classList.toggle('hidden_email_error');
  }
});