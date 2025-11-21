function openTab(tabId) {
	// 1. Hide all sections
	const sections = document.querySelectorAll('.section-content');
	sections.forEach(section => {
		section.classList.remove('active');
	});

	// 2. Deactivate all buttons
	const buttons = document.querySelectorAll('.tab-btn');
	buttons.forEach(button => {
		button.classList.remove('active');
	});

	// 3. Show the clicked section
	document.getElementById(tabId).classList.add('active');

	// 4. Highlight the clicked button
	// Find the button that calls this function with this ID
	const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
	if(activeBtn) {
		activeBtn.classList.add('active');
	}
}