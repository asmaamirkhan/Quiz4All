/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function questionOperations(req, res) {
    switch (req.query.process) {
        case 'add':
            modules.conn.query(
                'INSERT INTO QUESTION (ID, QUIZID, TEXT, TYPE, GRADE) ' +
                'VALUES (NULL, ?, ?, ?, ?)',
                [req.body.quiz_id, req.body.text, req.body.type, req.body.grade]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Question is added successfully'));
                });
            break;
        case 'update':
            modules.conn.query(
                'UPDATE QUESTION SET TEXT = ?, GRADE = ? WHERE ID = ?',
                [req.body.text, req.body.grade, req.body.id]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Question is updated successfully'));
                });
            break;
        case 'delete':
            modules.conn.query(
                'DELETE FROM QUESTION WHERE ID = ?',
                [req.body.id]
                , function (error) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Question is deleted successfully'));
                });
            break;
    }
}

module.exports = questionOperations;