const modules = require('./common_modules');

function quizOperations(req, res) {
    switch (req.query.process) {
        case 'find':
            modules.conn.query(
                'SELECT code FROM quiz WHERE CODE=?',
                [req.body.quizCode]
                , function (error, result) {
                    if (error) {
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    if (result.length)
                        res.json(modules.success_func('Quiz is fetched successfully', result));
                    else
                        res.json(modules.error_func('Quiz not found!', 550, req.body));
                });
    }
}

module.exports = quizOperations;