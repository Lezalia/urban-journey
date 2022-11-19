const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const validForm = document.querySelector('#valid-form');

const isEmpty = value => !value.length;

const isEmailValid = email => {
    const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
    return re.test(email);
};

const isPassSecure = pass => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(pass);
};

const checkEmail = () => {
    let valid = false;
    const emailValue = emailInput.value.trim();
    if (isEmpty(emailValue)){
        alert('El campo está vacío');
    } else if (!isEmailValid(emailValue)){
        alert('El email es inválido');
    } else {
        valid = true;
    }

    return valid;
};

const checkPass = () => {
    let valid = false;
    const passValue = passInput.value.trim();
    if (isEmpty(passValue)){
        alert('El campo contraseña está vacío');
    } else if(!isPassSecure(passValue)){
        alert('La contraseña no es segura');
    } else {
        valid = true;
    }
    return valid;
};

validForm.addEventListener('submit', e => {
    e.preventDefault();

    let isEmailValid = checkEmail();
    let isPassValid = checkPass();

    let isFormValid = isEmailValid && isPassValid;

    if(isFormValid){
        location.href = "../productos/productos.html";
    }
});

