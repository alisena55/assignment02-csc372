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
    button.addEventListener("click", () => toggleSave(card, button));
    card.appendChild(button);
}

function toggleSave(card, button)
{
    const isSaved = card.classList.toggle("saved");

    button.textContent = isSaved ? "Remove Event" : "Save Event";
    button.setAttribute("aria-pressed", isSaved);
}

