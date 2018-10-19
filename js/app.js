/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * akmadsen522@gmail.com
 * October 19, 2018
 * 
 * This file will be for shared functionality between all webpages
 */

// Element Refeences
const OPEN_BUTTON = document.getElementById("open-button");
const CLOSE_BUTTON = document.getElementById("close-button");
const MOBILE_MENU = document.getElementById("mobile-menu");
const DATE_DIV = document.getElementById("date-time");

// Funciton definitons 
function openMobileMenu() {
    MOBILE_MENU.className = "mobile-menu";
}

function closeMobileMenu() {
    MOBILE_MENU.className = "mobile-menu closed";
}

/**
 * Convert a given month index to a month string. 
 * 
 * @param {Number} monthIndex a number from 0 to 11, to describe
 * which month we are talking about.  
 */
function getMonthString(monthIndex) {
    switch (monthIndex) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function updateDateDisplay() {
    let today = new Date();

    let month = getMonthString(today.getMonth());
    let day = today.getDate();
    let year = today.getFullYear();

    DATE_DIV.innerHTML = `${month} ${day}, ${year}`;
}

// Interactivity - Mobile Menu Buttons 
OPEN_BUTTON.addEventListener('click', openMobileMenu);
CLOSE_BUTTON.addEventListener('click', closeMobileMenu);

// Initialization - update the date element
updateDateDisplay();