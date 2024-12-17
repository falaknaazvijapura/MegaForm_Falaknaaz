var nameInput = document.getElementById('nameInput');
var nameVad = document.getElementById('namevalidation');

var emailInput = document.getElementById('emailinput');
var emailVad = document.getElementById('emailvalidation');

var passwordInput = document.getElementById('passwordinput');
var passwordVad = document.getElementById('passwordvalidation');

var addressInput = document.getElementById('addressinput');
var addressVad = document.getElementById('addressvalidation');

var sportInput = document.querySelectorAll('input[name="chk_valid"]');
var sportVad = document.getElementById('sportvalidation');

var genderInput = document.querySelectorAll('input[name="gender"]');
var genderVad = document.getElementById('gendervalidation');

var countryInput = document.getElementById('slc');
var countryVad = document.getElementById('countryvalidation');

function handleValidation() {

    /* NAME VALIDATION */

    if (!nameInput.value) {
        nameVad.style.display = "block";
        nameInput.style.borderColor = "red";
        console.log('enter your value');
    } else {
        nameVad.style.display = "none";
        nameInput.style.borderColor = "#6c757d";
        console.log("it's okey")

    }


    /* EMAIL VALIDATION */

    if (!emailInput.value) {
        emailVad.style.display = "block";
        emailInput.style.borderColor = "red";
        console.log('enter your value');
    } else {
        emailVad.style.display = "none";
        emailInput.style.borderColor = "#6c757d";
        console.log("it's okey")

    }

    /* PASSWORD VALIDATION */


    if (!passwordInput.value) {

        passwordVad.innerHTML = "Please Enter Your Password!";
        passwordVad.style.display = "block";
        passwordInput.style.borderColor = "red";
        console.log('enter your value');

    } else if (passwordInput.value.length < 4 || passwordInput.value.length > 12) {

        passwordVad.innerHTML = "Password character must be in between 4 to 12!";
        passwordVad.style.display = "block";
        passwordInput.style.borderColor = "red";
        console.log('Password length is invalid');

    } else {

        passwordVad.innerHTML = "";
        passwordVad.style.display = "none";
        passwordInput.style.borderColor = "#6c757d";
        console.log("It's okay");

    }



    /* ADDRESS VALIDATION */

    if (!addressInput.value) {

        addressVad.style.display = "block";
        addressInput.style.borderColor = "red";
        console.log('enter your value');

    } else {

        addressVad.style.display = "none";
        addressInput.style.borderColor = "#6c757d";
        console.log("it's okey")

    }



    /* SPORT VALIDATION */

    const isAnyChecked = [];

    for (let i = 0; i < sportInput.length; i++) {

        if (sportInput[i].checked) {
            isAnyChecked.push(true)
        }
    }

    if (isAnyChecked.length == 0) {
        sportVad.style.display = "block";
        console.log('enter your value');
    } else {
        sportVad.style.display = "none";
        console.log("it's okey");
    }




    /* GENDER VALIDATION */

    const AnyTrue = [];

    for (let i = 0; i < genderInput.length; i++) {

        if (genderInput[i].checked) {
            AnyTrue.push(true)
        }
    }

    if (AnyTrue.length == 0) {
        genderVad.style.display = "block";
        console.log('enter your value');
    } else {
        genderVad.style.display = "none";
        console.log("it's okey");
    }

    /* COUNTRY VALIDATION */

    if (!countryInput.value) {

        countryVad.style.display = "block";
        countryInput.style.borderColor = "red";
        console.log('enter your value');

    } else {

        countryVad.style.display = "none";
        countryInput.style.borderColor = "#6c757d";
        console.log("it's okey")

    }


    // Check is form valid or not 

    if (
        nameInput.value &&
        emailInput.value &&
        addressInput.value &&
        countryInput.value &&
        passwordInput.value &&
        passwordInput.value.length > 4 &&
        passwordInput.value.length < 12 &&
        AnyChecked.length != 0 &&
        isAnyChecked.length != 0
    ) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            address: addressInput.value,
            password: passwordInput.value,
            country: countryInput.value,
        };
        handleTableData(formData);
        resetForm();
    }
}

function handleTableData(formData) {
    const tr = document.createElement("tr");
    console.log(tr);
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const sportTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const countryTd = document.createElement("td");
    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    addressTd.innerHTML = formData.address;
    passwordTd.innerHTML = formData.password;
    countryTd.innerHTML = formData.country;
    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        addressTd,
        sportTd,
        genderTd,
        countryTd
    );
    console.log(tr);
    tBody.appendChild(tr);
}

function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    countryInput.value = "";
    passwordInput.value = "";
}



