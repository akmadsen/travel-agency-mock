/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * October 19, 2018
 * 
 * This file will be for shared functionality between all webpages
 */

// * * * * * * * * * * * * * * * * * * * * * * * *
// 1) Set-up 
// * * * * * * * * * * * * * * * * * * * * * * * *
let openButton = document.querySelector("#open-button"); 
let closeButton = document.querySelector("#close-button"); 
let mobileMenu = document.querySelector("#mobile-menu"); 

const DATE_DIV = document.getElementById("date-time"); 

// * * * * * * * * * * * * * * * * * * * * * * * *
// 2) Write Functions 
// * * * * * * * * * * * * * * * * * * * * * * * *
function open() { 
    mobileMenu.className = "mobile-menu"; 
}

function close() { 
    mobileMenu.className = "mobile-menu closed"; 
}

function getMonthString(monthIndex) { 
    return "Mortuary";
}

function monthString(monthIndex) {
    switch(monthIndex) { 
        case 0: return "January";  
        case 1: return "February";  
        case 2: return "March";  
        case 3: return "April";  
        case 4: return "May";  
        case 5: return "June";  
        case 6: return "July";  
        case 7: return "August";  
        case 8: return "September";  
        case 9: return "October";  
        case 10: return "November";  
        case 11: return "December";  
    }
}

function updateTime() { 
    let today = new Date();
    
    let month = monthString(today.getMonth()); 
    let day = today.getDate(); 
    let year = today.getFullYear(); 

    DATE_DIV.innerHTML = `${month} ${day}, ${year}`; 
}

// * * * * * * * * * * * * * * * * * * * * * * * *
// 3) Wire it All Together
// * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', open); 
closeButton.addEventListener('click', close); 

// * * * * * * * * * * * * * * * * * * * * * * * *
// 4) Any Initialization Functions
// * * * * * * * * * * * * * * * * * * * * * * * *
updateTime(); 