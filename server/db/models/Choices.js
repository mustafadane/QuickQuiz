const Sequelize = require('sequelize')
const db = require('../db')

const Choice = db.define('choice', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  isCorrect: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  }
})

module.exports = Choice
