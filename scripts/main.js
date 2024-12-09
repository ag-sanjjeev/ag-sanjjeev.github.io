/*================================*/
/*						Functions						*/
/*================================*/
// Load Elements Function
function loadElements(selector, scrollEvent) {
	// Getting elements based on selector
	const elements = scrollEvent.target.querySelectorAll(selector);

	// Provent proceeding if no elements
	if (elements.length == 0 || typeof elements != 'object') { return false; } 

	let visibilityTolerance = 0.10;

	// Iterate through available elements
	elements.forEach(function(element, index) { 
		let element_offsetTop = element.offsetTop;
		
		let scrollProperties = windowScrollProperties();
		let scrollTop = scrollProperties.scrollTop;
		let screenBottom = scrollTop + window.innerHeight;		

		// in range of visibility
		if (element_offsetTop < screenBottom) {

			// within visibility tolerance
			if (element_offsetTop < screenBottom - (window.innerHeight * visibilityTolerance)) {
				let animationName = (element.dataset.animate) ? element.dataset.animate : null;				
				let animationDelay = (element.dataset.animatedelay) ? element.dataset.animatedelay : 0;				
				element.style.visibility = 'visible';
				element.style.animationDelay = animationDelay + 's';
				(animationName) ? element.classList.add(animationName) : null;
			}

		// not in range of visibility
		} else {
			let animationName = (element.dataset.animate) ? element.dataset.animate : null;
			element.style.visibility = 'hidden';						
			(animationName) ? element.classList.remove(animationName) : null;				
		}
	});
}

// windowScroll Properties
function windowScrollProperties() {
	let isPageOffsetSupport = window.pageXOffset !== undefined;
	let isCompatMode = (document.compatMode === 'CSS1Compat') ? true : false;

	let scrollLeft = isPageOffsetSupport ? window.pageXOffset : isCompatMode ? document.documentElement.scrollLeft : document.body.scrollLeft;
	let scrollTop = isPageOffsetSupport ? window.pageYOffset : isCompatMode ? document.documentElement.scrollTop : document.body.scrollTop;

	return {scrollLeft: scrollLeft, scrollTop: scrollTop};
}

/*==============================*/
/*				Event Listeners				*/
/*==============================*/
// Window Load Event Listener
window.addEventListener('load', function(event) {
	// Make loadElements animation effect
	document.querySelectorAll('.animate__animated')[0].style.visibility = 'hidden';
	loadElements('.animate__animated', event);
});

// Window Load Event Listener
window.addEventListener('scroll', function(event) { 
	loadElements('.animate__animated', event);
});

