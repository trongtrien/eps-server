const jwt = require("jsonwebtoken");

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
  return specialChars.test(str);
}
module.exports = {
  validateRegister: (req, res, next) => {
    // username min length 3
    if (!req.body.username || req.body.username.length < 3) {
      return res.status(400).send({
        msg: 'Vui lòng nhập username lớn hơn 3 ký tự'
      });
    }

    // username has Special Characters
    if (containsSpecialChars(req.body.username)) {
      return res.status(400).send({
        msg: 'Tên đăng nhập chứa ký tự đặc biệt vui lòng chọn tên khác'
      });
    }

    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: 'Vui lòng nhập password ít nhất 6 ký tự'
      });
    }

    // password has Special Characters
    if (!containsSpecialChars(req.body.password)) {
      return res.status(400).send({
        msg: 'Password cần một ký tự đặc biệt'
      });
    }

    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      // eslint-disable-next-line eqeqeq
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: 'Xác minh mật khẩu không đúng'
      });
    }
    next();
  },

  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        'SECRETKEY'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.send({
        msg: 'Your session is not valid! Login please'
      });
    }
  }
}