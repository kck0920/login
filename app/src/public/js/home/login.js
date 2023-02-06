'use strict';

const id = document.querySelector('#id'),
	password = document.querySelector('#password'),
	loginBtn = document.querySelector('#btn_login');

loginBtn.addEventListener('click', login);

function login() {
	const req = {
		id: id.value,
		password: password.value,
	};

	fetch('/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	}).than((res)=> res.json())
		.than((res) => {}); 
}
