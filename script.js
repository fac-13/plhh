

// JS functionality to close the manu checkbox when user follows internal link:


	// access our checkbox
	const checkBox = document.querySelector('#menu-check');
	// access internal links
	const menuItems = document.querySelectorAll('.header__item');
	// on internal link click event uncheck checkbox
	menuItems.forEach(menuItem => menuItem.addEventListener('click', function() {
		checkBox.checked = false;
	}));
	


	// access our year-holder span
	let displayYear = document.querySelector('.js-year');
	let theYear = new Date().getFullYear();
	// populate the footer with the year
	displayYear.textContent = theYear;