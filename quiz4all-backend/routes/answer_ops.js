/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function quizOperations(req, res) {
    switch (req.query.process) {
        case 'add':
            if (!(req.body.truth))
                req.body.truth = 1
            modules.conn.query(
                'INSERT INTO ANSWER (ID, QUESTION_ID, TEXT, TRUTH) ' +
                'VALUES (NULL, ?, ?, ?)',
                [req.body.question_id, req.body.text, req.body.truth]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Answer is added successfully'));
                });
            break;
        case 'update':
            if (!(req.body.truth))
                req.body.truth = 1
            modules.conn.query(
                'UPDATE ANSWER SET TEXT = ?, TRUTH = ? WHERE ID = ?',
                [req.body.text, req.body.truth, req.body.id]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Answer is updated successfully'));
                });
            break;
        case 'delete':
            modules.conn.query(
                'DELETE FROM ANSWER WHERE ID = ?',
                [req.body.id]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Answer is deleted successfully'));
                });
            break;
    }
}

module.exports = quizOperations;