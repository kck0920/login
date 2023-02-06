'use strict';

const output = {
	home: (req, res) => {
		res.render('./home/index.ejs');
	},
	login: (req, res) => {
		res.render('./home/login.ejs');
	},
};

const users = {
	id: ['malthael', '나개발', '김팀장'],
	password: ['1234', '1234', '123456'],
};

const process = {
	login: (req, res) => {
		const id = req.body.id,
			password = req.body.password;

		// console.log(id, password)
		if (users.id.includes(id)) {
			const idx = users.id.indexOf(id);
			if (users.password[idx] === password) {
				return res.json({
					success: true,
				});
			}
		}
		
		return res.json({
			success: false,
			msg: "로그인에 실패하셨습니다.",
		});
	},
};

module.exports = {
	output,
	process,
};
