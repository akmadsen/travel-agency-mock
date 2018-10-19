/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * akmadsen522@gmail.com
 * October 19, 2018
 * 
 * This file will add extra functionality for the Call-to-Action
 * button (provided on the index page for now). 
 */

// HTML Element References
const CTA_BUTTON = document.getElementById("cta-button"); 
const PRODUCTS_LOCATION = "products.html"; 

// Interactivity 
CTA_BUTTON.addEventListener('click', () => {
    window.location.href = PRODUCTS_LOCATION;
}); 