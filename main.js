"use strict";

function validateForm() {
    let uname = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;

    if (uname.length < 6) {

        alert("Name needs to be minimum of 6 characters long");
        uname.focus();
        return false;
    }
    else {
        let alertMsg = "The details supplied: " + 
        "\nName: " + uname + 
        "\nEmail: " + email + 
        "\nDo you want to submit this form";

        confirm(alertMsg);
       return true;
    }
}