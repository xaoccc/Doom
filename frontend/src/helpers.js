export function createErrorMesage(target, message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    target.insertAdjacentElement('afterend', errorMessage);
}

export function changeInput(e) {
    e.target.setCustomValidity('');
    const nextElement = e.target.nextElementSibling;
    if (nextElement && nextElement.classList.contains('error-message')) {
        nextElement.remove();
    }
}

export function validate(e, message) {
    const nextElement = e.target.nextElementSibling;
    if (nextElement && nextElement.classList.contains('error-message')) {
        nextElement.remove();
    }
    e.target.setCustomValidity(' ');
    createErrorMesage(e.target, message);
}