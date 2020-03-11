const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
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
User.sync({ alter: true });
exports.User = User;
