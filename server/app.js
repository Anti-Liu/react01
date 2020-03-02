const express = require('express');

const {User} = require('./sequelize');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res,next)=>{
  return res.json({msg :'OK'});
})

app.post('/login', (req, res, next) => {
  const { username, password } = req.body
  
  return User.findAll({ where: { username, password } })
    .then(() => { res.json({ status: 'success' }) }, (err) => { res.json({ error: err }) })
});

app.listen(3001);
module.exports = app;