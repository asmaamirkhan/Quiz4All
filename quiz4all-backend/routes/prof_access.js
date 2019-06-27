/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function userAccess(req, res) {
    if (req.query.process == 'signup') {
        console.log(req.body)
        modules.bcrypt.hash(req.body.password, 5, function (err, hashed_pwd) {
            if (err)
                return res.json(modules.error_func('Encryption error', req.body));
            modules.conn.query(
                'INSERT INTO PROFESSOR (ID, NAME, EMAIL, UNIVERSITY, PASSWORD) ' +
                'VALUES (NULL, ?, ?, ?, ?)',
                [req.body.name, req.body.email, req.body.university,
                    hashed_pwd, new Date().getTime()]
                , function (error) {
                    if (error) {
                        console.log(error.message)
                        if (error.code == 'ER_DUP_ENTRY')
                            return res.json(modules.error_func('User already exists!', 510, req.body));
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('User added successfully'));
                });
        });
    } else if (req.query.process == 'login') {
        modules.conn.query(
            'SELECT EMAIL, PASSWORD FROM PROFESSOR WHERE EMAIL=? ', [req.body.email],
            function (error, result) {
                if (error) {
                    console.log(error)
                    return res.json(modules.error_func('Database error', 511, req.body));
                }
                console.log(result)
                if (result.length) {
                    modules.bcrypt.compare(req.body.password, result[0]['PASSWORD'], function (err, equal) {

                        if (equal) {
                            modules.jwt.sign({ id: result[0]['ID'] }, 'QUIZ4ALL2019', function (err, token) {
                                if (err) {
                                    res.json(modules.error_func('Token error', 513, req.body));
                                } else {
                                    res.json(modules.success_func('Logged in successfully', token));
                                }
                            });
                        } else {
                            res.json(modules.error_func('Incorrect email1 or password', 512, req.body));
                        }
                    });
                } else {
                    res.json(modules.error_func('Incorrect email or password', 512, req.body));
                }

            });
    }
}

module.exports = userAccess;