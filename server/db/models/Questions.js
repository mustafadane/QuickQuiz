const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  }
})

module.exports = Question
