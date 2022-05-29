const Sequelize = require('sequelize')
const sequelize = require('../db')
const Classroom = require('./classe')


const User = sequelize.define('User', {
id:{
type: Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
UserName: { type: Sequelize.STRING, allowNull: false },
Password: { type: Sequelize.STRING, allowNull: false },
})

module.exports = User