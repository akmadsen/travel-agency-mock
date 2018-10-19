/**
 * CPNT 262 - Assignment 4 
 * Alex Madsen
 * akmadsen522@gmail.com
 * October 19, 2018
 * 
 * This file is for generating agent cards on the contact page
 */

 // Agent Data (Assignment Spec. Format)
const AGENT_NAMES = ["Joe Schmo", "Brenda Brendasson", "Neal McBeal"]; 
const AGENT_PHONES = ["403-555-555", "587-555-5555", "403-222-2222"]; 

// HTML Element References 
const CARD_CONTAINER = document.getElementById("agent-container"); 

// Function Definitions 
function appendAgentCard(name, phone) { 
    let newCard = document.createElement('div'); 
    newCard.classList.add('agent-card'); 

    newCard.innerHTML = `
        <h3>${name}</h3>
        <p>${phone}</p>
        `; 

    CARD_CONTAINER.appendChild(newCard); 
}

// Initialization Behaviour 
for(let i = 0; i < AGENT_NAMES.length; i++) { 
    appendAgentCard(AGENT_NAMES[i], AGENT_PHONES[i]); 
}