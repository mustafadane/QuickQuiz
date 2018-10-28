const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  },
  activeDate: {
      type: Sequelize.DATE
  }
})

module.exports = Quiz
