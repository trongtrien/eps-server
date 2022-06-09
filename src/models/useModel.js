const db = require('../../config/Db_config')
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const useCtrl = {
    getUser: async (req, res, next) => {
      db.query("SELECT * FROM users",
      (err, resuilt) => {
        if(err) {console.log(err)}
        res.send(resuilt)
      })
    },
    addUse: async (req, res, next) => {
        db.query(
          `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(req.body.username)});`,
          (err, result) => {
            if (result.length) {
              return res.status(409).send({
                     msg: 'Người dùng đã tồn tại vui lòng chọn tên khác'
              });
            } else {
              // username is available
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                  return res.status(500).send({
                         msg: err
                  });
                } else {
                  // has hashed pw => add to database
                  db.query(
                    `INSERT INTO users (id, username, name, email, password, sex, registered)
                     VALUES
                     ('${uuid.v4()}',${db.escape(req.body.username)},${db.escape(req.body.name)},${db.escape(req.body.email)}, ${db.escape(hash)},${db.escape(req.body.sex)}, now())`,
                    (err, result) => {
                      if (err) {
                        throw err;
                      }
                      return res.status(201).send({
                             msg: 'Registered! Thành công'
                      });
                    }
                  );
                }
              });
            }
          }
        );
      },

    logidIn: async (req, res, next) => {
        db.query(
          `SELECT * FROM users WHERE username = ${db.escape(req.body.username)}`,
          (err, result) => {
            // user does not exists
            if (err) {
              throw err;
            }
      
            if (!result.length) {
              return res.status(401).send({
                msg: 'Bạn chưa điền tên hoặc tên đăng nhập sai',
                countErr: false
              });
            }
      
            // check password
            bcrypt.compare(
              req.body.password,
              result[0]['password'],
              (bErr, bResult) => {
                // wrong password
                if (bErr) {
                  throw bErr;
                }
      
                if (bResult) {
                  const token = jwt.sign({
                      userId: result[0].id,
                      name: result[0].name,
                      sex: result[0].sex,
                      role: result[0].role
                    },
                    'SECRETKEY', {
                      expiresIn: '7d'
                    }
                  );
      
                  db.query(
                    `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                  );
                  return res.status(200).send({
                    msg: 'Logged in - Đăng nhập thành công',
                    token,
                    user: result[0],
                    countErr: false
                  });
                }
                if (!bResult) {
                  return res.status(401).send({
                    countErr: true,
                    msg: 'Tên đăng nhập hoặc mật khẩu không đúng'
                  });
                }
                return res.status(401).send({
                  msg: 'Tên đăng nhập hoặc mật khẩu không đúng',
                  countErr: true
                });
              }
            );
          }
        );
      },
      
    secret: async (req, res, next) => {
        res.send('This is the secret content. Only logged in users can see that!');
      },

}

module.exports = useCtrl


