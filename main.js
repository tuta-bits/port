"use strict";

function validateForm() {
    let uname = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;

    if (uname.length < 6) {

        alert("Name needs to be minimum of 6 characters long");
        return false;
    }
    else {
        let alertMsg = "Thanks, feedback sent successfully." + 
        "\nWe really appreciate your time." + 
        "\nAnd will action your request in timely manner.";

        confirm(alertMsg);
       return true;
    }
}