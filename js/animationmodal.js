const login = document.querySelector('.login');
const openModalBtn = document.querySelector('.open-modal-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.login-modal');

openModalBtn.addEventListener('click', function(e) {
	modal.classList.add('open-modal');
	overlay.classList.add('open-overlay');
});

overlay.addEventListener('click', function() {
	modal.classList.remove('open-modal');
	overlay.classList.remove('open-overlay');
});
