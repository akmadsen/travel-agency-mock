// * * * * * * * * * * * * * * * * * * * * * * * *
// 1) Set-up 
// * * * * * * * * * * * * * * * * * * * * * * * *
let openButton = document.querySelector("#open-button"); 
let closeButton = document.querySelector("#close-button"); 
let mobileMenu = document.querySelector("#mobile-menu"); 

// * * * * * * * * * * * * * * * * * * * * * * * *
// 2) Write Functions 
// * * * * * * * * * * * * * * * * * * * * * * * *
function open() { 
    mobileMenu.className = "mobile-menu"; 
}

function close() { 
    mobileMenu.className = "mobile-menu closed"; 
}

// * * * * * * * * * * * * * * * * * * * * * * * *
// 3) Wire it All Together
// * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', open); 
closeButton.addEventListener('click', close); 