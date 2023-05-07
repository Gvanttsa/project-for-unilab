function emailValidation() {
    // let formEmail = document.getElementById('subscribtion');
    let emailfiled = document.getElementById('myEmail').value;
    let spanText = document.getElementById('emailtext');
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailfiled.match(emailStructure)) {
        spanText.innerHTML = 'Your Email is Valid';
        spanText.style.color = 'green';
    } else {
        spanText.innerHTML = 'Your Email is not Valid';
        spanText.style.color = 'red';
    }
}

function functionEmail() {
    let emailInput = document.getElementById('email').value;
    let spanError = document.getElementById('error-span');
    let structureOfEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailInput.match(structureOfEmail)) {
        spanError.innerHTML = 'Your Email is valid';
        spanError.style.color = 'green';
    } else {
        spanError.innerHTML = 'Your Email is not Valid';
        spanError.style.color = 'red';
    }
}