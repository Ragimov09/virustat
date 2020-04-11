const openModalBtn = document.querySelectorAll('.open-modal-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.mymodal');

openModalBtn.forEach((el) =>
	el.addEventListener('click', function(e) {
		modal.classList.add('open-modal');
		overlay.classList.add('open-overlay');
	})
);

overlay.addEventListener('click', function() {
	modal.classList.remove('open-modal');
	overlay.classList.remove('open-overlay');
});
