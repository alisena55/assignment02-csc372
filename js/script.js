
// UNCG Outdoor Adventures - Save Events (CSC 372 Assignment 03)


// I wait for the page to load first so all the cards exist before my code looks for them
document.addEventListener("DOMContentLoaded", setupPage);

function setupPage() {
    makeSummarySection();         // summary section has to exist before updateSavedList runs

    let cards = document.querySelectorAll(".event-card");

    for (let i = 0; i < cards.length; i++) {
        let button = document.createElement("button");
        button.textContent = "Save Event";
        button.classList.add("button");
        button.classList.add("save-btn");
        button.addEventListener("click", saveButtonClicked);
        cards[i].appendChild(button);
    }

    updateSavedList();
}

function saveButtonClicked(event) {
    let button = event.target;          // the clicked button, and the card it's inside
    let card = button.parentElement;

    if (card.classList.contains("saved")) {
        card.classList.remove("saved");
        button.textContent = "Save Event";
    } else {
        card.classList.add("saved");
        button.textContent = "Remove Event";
    }

    updateSavedList();
}

// built in JS since the HTML wasn't supposed to change, would have been easier if I could change html
// but try to stay on grading rules provided for this assignment
function makeSummarySection() {
    let section = document.createElement("section");
    section.id = "saved-events";

    let heading = document.createElement("h2");
    heading.textContent = "My Saved Events";

    let message = document.createElement("p");
    message.id = "empty-msg";
    message.textContent = "You haven't saved any events yet.";

    let list = document.createElement("ul");
    list.id = "saved-list";

    section.appendChild(heading);
    section.appendChild(message);
    section.appendChild(list);

    document.querySelector("main").appendChild(section);
}

function updateSavedList() {
    let list = document.getElementById("saved-list");
    let message = document.getElementById("empty-msg");
    let savedCards = document.querySelectorAll(".event-card.saved");

    // clear and rebuild every time so the list always matches the cards
    list.textContent = "";

    for (let i = 0; i < savedCards.length; i++) {
        let card = savedCards[i];
        let name = card.querySelector("h3").textContent;
        let date = card.querySelector("time").textContent;
        let location = card.querySelectorAll("p")[1].textContent;

        // Fall Break only shows dates, so grab the start time from datetime
        if (!date.includes(":")) {
            let datetime = card.querySelector("time").getAttribute("datetime");
            let startTime = datetime.split("T")[1];
            date = date + ", starts " + startTime;
        }

        let item = document.createElement("li");
        item.textContent = name + " | " + date + " | " + location;
        list.appendChild(item);
    }

    if (savedCards.length === 0) {
        message.classList.remove("is-hidden");
    } else {
        message.classList.add("is-hidden");
    }
}

