/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function studentOperations(req, res) {
    switch (req.query.process) {
        case 'enroll':
            modules.conn.query(
                'select * from quiz WHERE CODE=? and EMAIL_CONST=?',
                [req.body.quiz_code, req.body.email_const]
                , function (error, result) {
                    if (error) {
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    if (result.length) {
                        modules.conn.query(
                            'INSERT INTO STUDENT (ID, NAME, QUIZ_ID, EMAIL) ' +
                            'VALUES (NULL, ?, ?, ?)',
                            [req.body.name, req.body.quiz_id, req.body.email]
                            , function (error) {
                                if (error) {
                                    return res.json(modules.error_func('Database error', 511, req.body));
                                }
                                res.json(modules.success_func('Student enrolled successfully'));
                            });
                    }
                    res.json(modules.error_func('Student has enrolled the exam already', 511, req.body));
                });
            break;

        case 'getGrade':
            modules.conn.query(
                'SELECT STUDENT.GRADE, STUDENT.NAME FROM STUDENT,QUIZ WHERE STUDENT.QUIZ_ID=QUIZ.ID ' +
                'AND QUIZ.CODE=? AND STUDENT.EMAIL=?',
                [req.body.quiz_code, req.body.email_const]
                , function (error, result) {
                    if (error) {
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    if (result.length) {
                        res.json(modules.success_func('Data fetched successfully', result));
                    }
                    res.json(modules.error_func('Invalid email or quiz code', 511, req.body));
                });
            break;

        case 'submit':
            modules.conn.query(
                'INSERT INTO STUDENT_ANS (QUESTION_ID, QUIZ_ID, ANSWER) VALUES ?',
                [req.body.data.map(item => [item.question_id, item.quiz_id, item.answer])]
                , function (error) {
                    if (error) {
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Answers saved successfully'));
                });
            break;
    }
}
module.exports = studentOperations;