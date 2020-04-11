const baseUrl = '';

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', sendLoginFormData);

function sendLoginFormData(e) {
	e.preventDefault();
	const username = document.querySelector('#login-username').value;
	const password = document.querySelector('#login-password').value;

	const formData = {
		username: username,
		password: password
	};

	const data = JSON.stringify(formData);

	fetch(`${baseUrl}`, {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((response) => {
			const token = response.token;
			localStorage.setItem('token', token);
		})
		.catch((err) => console.log(err));
}
