import fetch from '../utils/fetch';

export function getPubKey() {
	return fetch({
		url: `${process.env.REACT_APP_AUTH}/auth/api/open/pubKey`,
		method: 'get'
	});
}

export function loginByUsername(loginForm) {
	return fetch({
		url: '/user/login',
		method: 'post',
		data:loginForm
	});
}

export function updatePassword(oldPwd, newPwd) {
	const data = {
		oldPwd,
		newPwd
	};
	return fetch({
		url: '/user/updatePassword',
		method: 'post',
		data
	});
}

export function loginOut() {
	return fetch({
		url: '/user/loginOut',
		method: 'post',
	});
}

