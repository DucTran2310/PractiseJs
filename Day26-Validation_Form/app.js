var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');

  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');

  parent.classList.remove('error');
  small.innerText = '';
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach(input => {
    input.value = input.value.trim()

    if (!input.value) {
      isEmptyError = true;
      showError(input, 'Khong duoc de trong')
    } else {
      showSuccess(input)
    }
  })
  return isEmptyError
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let isEmailError = !regexEmail.test(input.value)
  if (regexEmail.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }

  return isEmailError
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim()

  if (input.value.length < min) {
    showError(input, `Phai co it nhat ${min} ky tu`)
    return true
  }

  if (input.value.length > max) {
    showError(input, `Khong duoc vuot qua ${max} ky tu`)
    return true
  }

  return false
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
    return true
  }

  return false
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
  let isEmailError = checkEmailError(email)
  let isUserLengthError = checkLengthError(username, 6, 20)
  let isPasswordLengthError = checkLengthError(password, 3, 10)
  let isCheckMatchError = checkPasswordsMatch(password, confirmPassword)

})