/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * October 19, 2018
 * 
 * This file is for processing the account generation form. 
 */

 // Element References
const SUBMIT_BUTTON = document.getElementById('submit-button'); 
const ACCOUNT_FORM = document.forms[0]; // We know we only have one form 
const ERROR_MESSAGES = document.querySelectorAll('.error'); 

// Required Field Error IDs
const NAME_ERROR_ID = "name-error"; 
const ADDRESS_ERROR_ID = "address-error"; 
const CITY_ERROR_ID = "city-error"; 
const PROVINCE_ERROR_ID = "province-error"; 
const POSTAL_ERROR_ID = "postal-error"; 
const EMAIL_ERROR_ID = "email-error"; 
const PHONE_ERROR_ID = "phone-error"; 

// Format Error IDs
const POSTAL_FORMAT_ERROR_ID = "postal-error-bad-format"; 

// Function Definitions

/**
 * Assserts that all required fields are filled out. 
 * 
 * Returns an array full of the ID's of error messages that need to be activated.
 */
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

/**
 * Tests postal format. Returns true if OK, false otherwise. 
 */
function testPostalFormat() { 
    // Don't bother testing if the postal code isn't filled out. 
    if (ACCOUNT_FORM['postal-code'].value === "") {
        return true; 
    }

    // Postal Regex gathered from Stack Overflow post 
    // https://stackoverflow.com/questions/1146202/canadian-postal-code-validation 
    let postalRegex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;

    let postalCode = ACCOUNT_FORM['postal-code'].value; 
    postalCode = postalCode.trim(); 
    postalCode = postalCode.toUpperCase(); 

    return postalRegex.test(postalCode); 
}

/**
 * Asserts that the format of items we are concerned about are formed correctly. 
 * 
 * For this assignment, only the Postal Code was tested. 
 * 
 * Returns an array of IDs for any error messages that need to be activated. 
 */
function assertFormats() { 
    let formatErrors = []; 

    // If our postal code does not match, log an error 
    if(!testPostalFormat()) { 
        formatErrors.push(POSTAL_FORMAT_ERROR_ID); 
    }

    return formatErrors; 
}

function validateForm() { 
    let requiredErrors = assertRequired(); 
    let formatErrors = assertFormats(); 

    return requiredErrors.concat(formatErrors);
}

function enableError(errorElement) { 
    if(errorElement.classList.contains('error-closed')) { 
        errorElement.classList.remove('error-closed'); 
    }
}

function disableError(errorElement) { 
    if(!errorElement.classList.contains('error-closed')) { 
        errorElement.classList.add('error-closed'); 
    }
}

function reportErrors(errorList) { 
    // We only call this function if we have more than one error
    for(let i = 0; i < ERROR_MESSAGES.length; i++) { 

        // Step through all our errormessages 
        let error = ERROR_MESSAGES[i]; 
        if(errorList.includes(error.id)) {
            enableError(error); 
        } else { 
            disableError(error); 
        }
        
    }
    console.log(errorList); 
}

// Form Interactivity
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