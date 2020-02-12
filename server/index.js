const express = require('express');
const createError = require('http-errors');
const User = require('./model');
const app = express();

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ where: { username, password } })
    .then(() => { res.json({ status: 'success' }) }, (err) => { res.json({ error: err }) })
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
  res.render('error');
});


app.set('port', '3001');