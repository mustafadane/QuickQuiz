const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
// const path = require('path')
const db = require('./db')

// app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api/users', require('./routes/users'))
app.use('/api/quizzes', require('./routes/quizzes'))
app.use('/api/questions', require('./routes/questions'))
app.use('/api/choices', require('./routes/choices'))
app.use('/api/answers', require('./routes/answers'))


module.exports = app

if (require.main === module) {
  app.listen(PORT, (e) => {
    if (e) throw e
    console.log(`listening on port ${PORT}`)
  })
}
