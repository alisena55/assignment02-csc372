// UNCG Outdoor Adventures - Save Events feature
// Assignment-03


document.addEventListener("DOMContentLoaded", init);

function init() {
    const cards = document.querySelectorAll(".event-card");
    cards.forEach(addSaveButton);
}


function addSaveButton(card) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Save Event";
    button.classList.add("button", "save-btn");
    button.setAttribute("aria-pressed", "false");
    card.appendChild(button);
}
