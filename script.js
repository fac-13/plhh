

// JS functionality to close the manu checkbox when user follows internal link:

const closeMenu = function() {

	// access our checkbox
	let checkBox = document.querySelector('#menu-check');
	// access internal links
	let menuItem = document.querySelectorAll('.header__item');
	// on internal link click event uncheck checkbox
	menuItem.addEventListener('click', function() {
		checkBox.checked = false
	});
	
}


const theYear = function() {

	// access our year-holder span
	let displayYear = document.querySelector('.js-year');
	// populate the footer with the year
	displayYear.textContent = `${new Date(Y)}``
}