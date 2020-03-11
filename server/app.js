const express = require('express');

const { User } = require('./sequelize');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  return res.json({ msg: 'OK' });
})

app.post('/users', async (req, res, next) => {
  const { username, password } = req.body

  return User.create({ username, password })
    .then((data) => {
      return res.json({ data });
    }).catch((error) => {
      return res.json({ error });
    });

});

app.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  return User.findOne({ where: { username, password } })
    .then((data) => {
      return res.json({ data: 'success' });
    }).catch((error) => {
      return res.json({ error });
    });

});

app.listen(3001);
module.exports = app;