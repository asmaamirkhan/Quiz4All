const modules = require('./common_modules');

function userAccess(req, res) {
    console.log('access')
    if (req.query.process == 'signup') {
        console.log(req.body)
        modules.bcrypt.hash(req.body.password, 5, function (err, hashed_pwd) {
            if (err) return res.json(modules.error_func('Encryption error', req.body));
            modules.conn.query(
                'INSERT INTO professor (id, first_name, last_name, email, university, password, register_date) ' +
                'VALUES (NULL, ?, ?, ?, ?, ?, NULL)',
                [req.body.firstName, req.body.lastName, req.body.email, req.body.university,
                    hashed_pwd, new Date().getTime()]
                , function (error) {
                    if (error) {
                        console.log(error.message)
                        if (error.code == 'ER_DUP_ENTRY') return res.json(modules.error_func('User already exists!', 510, req.body));
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('User added successfully'));
                });
        });
    } else if (req.query.process == 'login') {

    }
}

module.exports = userAccess;