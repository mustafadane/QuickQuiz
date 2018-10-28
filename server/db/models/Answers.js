const Sequelize = require('sequelize')
const db = require('../db')

const Answer = db.define('answer', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  }
})

module.exports = Answer
