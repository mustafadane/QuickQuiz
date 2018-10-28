const Sequelize = require('sequelize')
const dbName = 'quickQuiz'
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const client = new Sequelize(dbUrl, { logging: false, operatorsAliases: false })

module.exports = client

