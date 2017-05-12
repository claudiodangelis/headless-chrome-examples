const express = require('express')
let app = express()

app.use('/', express.static('static'))

app.post('/click', (req, res) => {
  console.log(`${new Date()}\n> Click from:\n> ${req.get('User-Agent')}\n`)
  res.json({clicked: true})
})

app.listen(8080, () => {
  console.log(`Server listening on port 8080`)
})
