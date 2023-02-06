'use strict';

class UserStorage {
	static #users = {
		id: ['hafuture', '나개발', '김팀장'],
		password: ['1234', '1234', '123456'],
		name: ['해퓨쳐', '나개발', '김팅장장'],
	};

	static getUsers(...fields) {
		const users = this.#users;
		const newUsers = fields.reduce((newUsers, field) => {
			if (users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return newUsers;
		}, {});
		console.log(newUsers);
		return newUsers;
	}

	static getUserInfo(id) {
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const userKeys = Object.keys(users); // => [id, password, name]
		const userInfo = userKeys.reduce((newUser, info) => {
			newUser[info] = users[info][idx];
			return newUser;
		}, {});
		return userInfo;
	}

	static save(userInfo) {
		const users = this.#users;
		users.id.push(userInfo.id);
		users.name.push(userInfo.name);
		users.password.push(userInfo.password);
		return { success: true };
	}
}

module.exports = UserStorage;
