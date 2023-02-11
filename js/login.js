// step 1: add event listener on button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    // DANGER: never use this method to any form
    // verify: email and password
    if(userEmail === 'shontan@gmail.com' && userPassword === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
})