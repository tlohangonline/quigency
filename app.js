// --- the burger menu ---

const burgerGroup = document.querySelector('.burger-group');
let openMenu = document.querySelector('.open-menu-btn');
let closeMenu = document.querySelector('.close-menu-btn');
let sideWrapper = document.querySelector('.side-wrapper');

openMenu.addEventListener('click', e=> {
	sideWrapper.style.right = '0';
	openMenu.style.display = 'none';
	closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', e=> {
	sideWrapper.style.right = '-1000px';
	openMenu.style.display = 'block';
	closeMenu.style.display = 'none';
})
