const Users = require('./Users')
const Quizzes = require('./Quizzes')
const Questions = require('./Questions')
const Choices = require('./Choices')
const Answers = require('./Answers')

Users.hasMany(Answers)
Answers.belongsTo(Users)
Answers.belongsTo(Choices)

Quizzes.hasMany(Questions)
Questions.belongsTo(Quizzes)

Questions.hasMany(Choices)
Choices.belongsTo(Questions)

module.exports = {
    Users,
    Quizzes,
    Questions,
    Choices,
    Answers
}
