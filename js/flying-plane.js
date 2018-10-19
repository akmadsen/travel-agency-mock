/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * akmadsen522@gmail.com
 * October 19, 2018
 * 
 * This file is to make our plane fly left to right.  
 * 
 * Adapted from Cat Walk class example. 
 */

// HTML Element References
const PLANE = document.getElementById('flying-plane');

// Defined Constants
const SPEED = 6;
const PLANE_WIDTH = 50; // FIXME: Hand-found plane width value...
const REFRESH_MS = 20; // How many ms before refresh 
const FLIPPED_CLASS = 'flipped';
const UNITS = 'px'; // Units for our plane's travel 

// Tracking Variables 
let flyForwards = true;
let direction = 1; // Only assigned 1 or -1


// Function Definitions
function facePlaneLeft() {
    if (!PLANE.classList.contains(FLIPPED_CLASS)) {
        PLANE.classList.add(FLIPPED_CLASS);
    }
}

function facePlaneRight() {
    if (PLANE.classList.contains(FLIPPED_CLASS)) {
        PLANE.classList.remove(FLIPPED_CLASS);
    }
}

function flyPlane() {
    let currentLeft = parseInt(PLANE.style.left);
    let maxLeft = window.innerWidth - PLANE_WIDTH; 

    if ((direction > 0) && (currentLeft > maxLeft)) {
        direction = -1;
        facePlaneLeft();
    }

    if ((direction < 0) && (currentLeft <= 0)) {
        direction = 1; 
        facePlaneRight(); 
    }

    PLANE.style.left = (currentLeft + (direction * SPEED)) + UNITS;
}

// Initialization Functions
setInterval(flyPlane, REFRESH_MS);