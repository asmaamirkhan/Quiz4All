/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function quizOperations(req, res) {
    switch (req.query.process) {
        case 'find':
            modules.conn.query(
                'SELECT CODE FROM quiz WHERE CODE=?',
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
            break;

        case 'addNew':
            if (!(req.body.email_const))
                req.body.email_const = 'No const'
            modules.conn.query(
                'INSERT INTO QUIZ (ID, CODE, EMAIL_CONST, PROF_ID, ACTIVATION_TIME, END_TIME) ' +
                'VALUES (NULL, ?, ?, ?, ?, ?)',
                [req.body.quiz_code, req.body.email_const, req.body.prof_id, req.body.activation_date, req.body.end_date]
                , function (error, result) {
                    if (error) {
                        if (error.code == 'ER_DUP_ENTRY')
                            return res.json(modules.error_func('Duplicate quiz code!', 510, req.body));
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Quiz is created successfully', result));
                });
            break;

        case 'getQuiz':
            let quiz = { code: req.body.quiz_code };
            modules.conn.query(
                'SELECT  question.ID as quest_id, question.TYPE, question.TEXT as quest_text, ' +
                'answer.TEXT as answer_text FROM quiz, question, answer ' +
                'WHERE quiz.ID=question.QUIZID and question.ID=answer.QUESTION_ID and quiz.CODE=?',
                [req.body.quiz_code]
                , function (error, result) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    quiz.questions = result;
                    res.json(modules.success_func('Quiz is fetched successfully', quiz));
                });
            break;

        case 'getAllQuizes':
            modules.conn.query(
                'SELECT QUIZ.*, COUNT(STUDENT.QUIZ_ID) AS STD_COUNT FROM QUIZ  LEFT JOIN STUDENT ON ' +
                ' QUIZ.ID = STUDENT.QUIZ_ID WHERE QUIZ.PROF_ID=? GROUP BY QUIZ.ID ORDER BY ID DESC',
                [req.body.decoded_id]
                , function (error, result) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    console.log(new Date(result[0]['ACTIVATION_TIME']).toLocaleString())
                    result.map((item)=>{
                        item['ACTIVATION_TIME']=item['ACTIVATION_TIME'].toLocaleString(); 
                        item['END_TIME']=item['END_TIME'].toLocaleString();
                    })
                    res.json(modules.success_func('Quizes are fetched successfully', result));
                });
            break;


        case 'getStatistic':
            modules.conn.query(
                'select student.NAME, student.EMAIL, student.GRADE from quiz, student where ' +
                'quiz.ID=student.QUIZ_ID and quiz.CODE=?',
                [req.body.quiz_code]
                , function (error, result) {
                    if (error) {
                        console.log(error)
                        return res.json(modules.error_func('Database error', 511, req.body));
                    }
                    res.json(modules.success_func('Report is fetched successfully', result));
                });
            break;
    }
}

module.exports = quizOperations;