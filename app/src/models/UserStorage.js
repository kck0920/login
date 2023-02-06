'use strict';

class UserStorage {
  static #users = {
	  id: ['malthael', '나개발', '김팀장'],
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
    console.log(newUsers)
		return newUsers;
  }
}

module.exports = UserStorage;