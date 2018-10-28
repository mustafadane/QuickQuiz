const db = require('./server/db');
const Users = require('./server/db/models/Users');
const Quizzes = require('./server/db/models/Quizzes');
const Questions = require('./server/db/models/Questions');
const Choices = require('./server/db/models/Choices');
const Answers = require('./server/db/models/Answers');

const users = [
    {firstName: 'first', lastName: 'last', email: 'email@email.com'}
]

// const Quizzes =
