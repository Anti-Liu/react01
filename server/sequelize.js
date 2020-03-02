const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
  storage: 'database.sqlite',
});

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: Sequelize.STRING,

});
sequelize
  .sync()
  .then(() => {
    console.log('init db ok')
  })
  .catch(err => {
    console.log('init db error', err)
  })
exports.User = User;
