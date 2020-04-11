const baseUrl = 'https://ms-authentication-test.herokuapp.com';

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', sendLoginFormData);

function sendLoginFormData(e) {
	e.preventDefault();
	const email = document.querySelector('#login-email').value;
	const password = document.querySelector('#login-password').value;

	const formData = {
		email: email,
		password: password
	};

	const data = JSON.stringify(formData);

	axios({
		method: 'POST',
		url: 'https://ms-authentication-test.herokuapp.com/auth/sign-in',
		headers: { 'Content-Type': 'application/json' },
		data: data
	})
		.then((response) => {
			console.log(response);
			const token = response.data.token;
			localStorage.setItem('token', token);
			window.location.assign('http://127.0.0.1:5500/hospitals.html');
		})
		.catch((err) => console.log(err));
}
