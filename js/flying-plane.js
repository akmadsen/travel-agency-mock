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

// Defined Constants 
const PLANE = document.getElementById('flying-plane');

// Tracking Variables 
let flyForwards = true;

// Function Definitions
function flyPlane() {
    let currentLeft = parseInt(PLANE.style.left);

    // FIXME: Magic number of 54 for plane pixel width
    if (flyForwards && (currentLeft > (window.innerWidth - 54))) {
        flyForwards = false;

        if (!PLANE.classList.contains('flipped')) {
            PLANE.classList.add('flipped'); 
        }
    }

    if (!flyForwards && (currentLeft <= 0)) {
        flyForwards = true;

        if (PLANE.classList.contains('flipped')) { 
            PLANE.classList.remove('flipped'); 
        }
    }

    if (flyForwards) {
        PLANE.style.left = (currentLeft + 10) + 'px';
    } else {
        PLANE.style.left = (currentLeft - 10) + 'px';
    }
}

// Interactivity
setInterval(flyPlane, 50);