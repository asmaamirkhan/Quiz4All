var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accessRouter = require('./routes/prof_access');
var quizRouter = require('./routes/quiz_ops');
var questionRouter = require('./routes/question_ops');
var answerRouter = require('./routes/answer_ops');
var studentRouter = require('./routes/student_ops');
var verifyAuth = require('./routes/verify');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(verifyAuth);
app.use('/access', accessRouter);
app.use('/student', studentRouter);

app.use('/quiz', quizRouter);
app.use('/question', questionRouter);
app.use('/answer', answerRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
