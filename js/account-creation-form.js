/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * October 19, 2018
 * 
 * This file is for processing the account generation form. 
 */

 // Defined Constants 
const SUBMIT_BUTTON = document.getElementById('submit-button'); 
const ACCOUNT_FORM = document.forms[0]; // We know we only have one form 
const ERROR_MESSAGES = document.querySelectorAll('.error'); 

// Error IDs for required elements 
const NAME_ERROR_ID = "name-error"; 
const ADDRESS_ERROR_ID = "address-error"; 
const CITY_ERROR_ID = "city-error"; 
const PROVINCE_ERROR_ID = "province-error"; 
const POSTAL_ERROR_ID = "postal-error"; 
const EMAIL_ERROR_ID = "email-error"; 
const PHONE_ERROR_ID = "phone-error"; 

// IDs for other error messages 
const POSTAL_FORMAT_ERROR_ID = "postal-error-bad-format"; 

// Function Definitions
function assertRequired() { 
    let requiredErrors = [];
    
    if (ACCOUNT_FORM['name'].value === "") { 
        requiredErrors.push(NAME_ERROR_ID); 
    }

    if (ACCOUNT_FORM['address'].value === "") { 
        requiredErrors.push(ADDRESS_ERROR_ID); 
    }

    if (ACCOUNT_FORM['city'].value === "") { 
        requiredErrors.push(CITY_ERROR_ID); 
    }

    if (ACCOUNT_FORM['province'].value === "") { 
        requiredErrors.push(PROVINCE_ERROR_ID); 
    }

    if (ACCOUNT_FORM['postal-code'].value === "") { 
        requiredErrors.push(POSTAL_ERROR_ID); 
    }

    if (ACCOUNT_FORM['email'].value === "") { 
        requiredErrors.push(EMAIL_ERROR_ID); 
    }

    if (ACCOUNT_FORM['phone'].value === "") { 
        requiredErrors.push(PHONE_ERROR_ID); 
    }
    
    return requiredErrors; 
}

function assertFormats() { 
    let postalRegex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/
    let formatErrors = []; 

    let postalCode = ACCOUNT_FORM['postal-code'].value; 
    postalCode = postalCode.trim(); 
    postalCode = postalCode.toUpperCase(); 
    
    let postalTest = postalRegex.test(postalCode); 
    console.log(postalTest); 

    // If our postal code does not match, log an error 
    if(!postalTest) { 
        formatErrors.push(POSTAL_FORMAT_ERROR_ID); 
    }

    return formatErrors; 
}

function validateForm() { 
    let requiredErrors = assertRequired(); 
    let formatErrors = assertFormats(); 

    return requiredErrors.concat(formatErrors);
}

function reportErrors(errorList) { 
    for(let i = 0; i < ERROR_MESSAGES.length; i++) { 
        let error = ERROR_MESSAGES[i]; 
        if(errorList.includes(error.id)) {
            if(error.classList.contains('error-closed')) { 
                error.classList.remove('error-closed'); 
            }
        } else { 
            if(!error.classList.contains('error-closed')) { 
                error.classList.add('error-closed'); 
            }
        }
    }
    console.log(errorList); 
}

// Interactivity 

SUBMIT_BUTTON.addEventListener('click', (event) => {
    event.preventDefault(); 

    let errorList = validateForm(); 

    // If we have errors, we need to report them, and not submit.
    if (errorList.length !== 0) {
        reportErrors(errorList); 
        return; 
    }

    ACCOUNT_FORM.submit(); 
});