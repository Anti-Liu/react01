const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: Sequelize.STRING,

});
exports.User = User;