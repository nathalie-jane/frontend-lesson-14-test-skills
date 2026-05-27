/* =======================================
	NAVIGATION (OVERLAY MENU)
========================================== */

/* ---------------------------------------
	DOM ELEMENTS

	- navMenu: Navigation menu container
	- buttonOpenMenu: Open menu button 
	  (hamburger icon)
	- buttonCloseMenu: Close menu button 
	  (X icon)
	- navLinks: All navigation links inside 
	  menu
------------------------------------------ */

const navMenu = document.getElementById("site-nav");
const buttonOpenMenu = document.getElementById("toggle-menu-button-open");
const buttonCloseMenu = document.getElementById("toggle-menu-button-close");
const navLinks = document.querySelectorAll(".site-nav__link");

/* ---------------------------------------
	MENU TOGGLE HANDLER

	- Toggle menu visibility
------------------------------------------ */

function toggleNavMenu() {
	navMenu.classList.toggle("menu");
}

/* ---------------------------------------
	MENU CLOSE HANDLER

	- Remove menu class to close menu when 
	  a link is clicked
------------------------------------------ */

function closeNavMenu() {
	navMenu.classList.remove("menu");
}

/* ---------------------------------------
	MENU BUTTON EVENTS

	- Open menu when hamburger button is 
	  clicked
	- Close menu when X button is clicked
------------------------------------------ */

buttonOpenMenu.addEventListener("click", toggleNavMenu);
buttonCloseMenu.addEventListener("click", toggleNavMenu);

/* ---------------------------------------
	NAVIGATION LINK EVENTS

	- Close menu when any navigation link 
	  is clicked
------------------------------------------ */

navLinks.forEach((linkItem) => {
	linkItem.addEventListener("click", closeNavMenu);
});
