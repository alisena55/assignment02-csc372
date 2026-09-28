# UNCG Outdoor Adventures Event Guide
**CSC 372 – Assignment 02 & 03**

## Project Description
This website is a Campus Event Guide for the UNCG Office of Student Engagement's Outdoor Adventures program. It is for UNCG students who want to find and register for wilderness trips, social activities, and outdoor excursions.

## Layout Decisions
* **Flexbox**: I used Flexbox in the `<header>` to line up the navigation links horizontally, in the `<footer>` to center the content and links, and in the `.related-events` section (`.flex-wrapper`) so the compact event cards wrap onto new lines on smaller screens. Flexbox works well here because each of these layouts goes in one direction (a row or a column).
* **CSS Grid**: I used Grid for the `.event-grid` on the Home page to make a responsive multi-column layout. The `.card-wide` class makes the featured card span two columns while the other cards take up one, so the grid has two different item widths. I also used Grid in `.content-grid-wrapper` on the Featured Event page to put the main content and sidebar side by side (2fr / 1fr) on larger screens. Grid works well here because I'm controlling both rows and columns.

## Responsive Design
The CSS is mobile-first: everything starts in a single column, and media queries add columns as the screen gets wider.
* **Breakpoint 1 (768px)**: Tablets and up. The `.event-grid` changes from one column to two, and the Featured Event page changes from stacked sections to a two-column layout (2fr main, 1fr sidebar).
* **Breakpoint 2 (1024px)**: Large desktops. The `.event-grid` expands to three columns.
* **Testing**: I tested the pages by resizing the browser window and using Chrome DevTools device mode to check that the Flexbox wrapping and Grid changes happen at each breakpoint.

## Semantic HTML
1. `<header>`: Contains the site title and primary navigation.
2. `<nav>`: Wraps the primary navigation links.
3. `<main>`: Used once per page to hold the main page content.
4. `<time>`: Used in the event cards for dates and times, with a machine-readable `datetime` attribute.

## Accessibility
* Links and buttons have `:hover` and `:focus` styles so keyboard users can see where they are on the page.
* All images include `alt` text describing the event.

## JavaScript Features (Assignment 03)
The home page has a Save Events feature, written in `js/script.js` and loaded with `defer`. The HTML was only changed to add the script tag.
* **Save Event buttons**: When the page loads (`DOMContentLoaded`), a Save Event button is created with `createElement` and added to each event card.
* **Save / Remove**: Clicking a button adds or removes the `saved` class with `classList`, which highlights the card with a gold border and background. The button text switches between "Save Event" and "Remove Event".
* **Saved Events summary**: A "My Saved Events" section is created at the bottom of the page. Every time a button is clicked, the list is cleared and rebuilt from the cards that have the `saved` class, showing each event's name, date/time, and location.
* **Empty message**: When nothing is saved, a message is shown. It is hidden with the `is-hidden` class once an event is saved.
* No inline JavaScript or `innerHTML` is used. All clicks are handled with `addEventListener`.

## Sources
* Event names and dates come from the UNCG Outdoor Adventures Fall calendar: [https://recwell.uncg.edu/outdoor-adventures/trips-events/]
* Images were generated with AI using prompts based on each event's setting.