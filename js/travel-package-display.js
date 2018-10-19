/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * October 19, 2018
 * 
 * This file is for the vacation package display. 
 */

const TILE_DISPLAY = document.getElementById('tile-display'); 
const TILE_DISPLAY_DEFAULT_SRC = TILE_DISPLAY.src; 
const PACKAGE_TILES = document.querySelectorAll('.package-tile'); 

function tileHover(event) { 
    TILE_DISPLAY.src = event.currentTarget.src; 
}

function tileUnhover(event) { 
    TILE_DISPLAY.src = TILE_DISPLAY_DEFAULT_SRC; 
}

// Get the mouse over and out events hooked up 
for(let tile of PACKAGE_TILES) { 
    tile.addEventListener('mouseover', tileHover);
    tile.addEventListener('mouseout', tileUnhover); 
}
