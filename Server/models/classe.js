const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('./user')


const Classroom = sequelize.define('Classroom', {
id:{
type: Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
code: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Classroom