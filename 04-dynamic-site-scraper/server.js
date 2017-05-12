const express = require('express')
let app = express()

app.use('/', express.static('static'))

app.get('/stories', (_, res) => {
  res.json([
    {
      title: 'What is the benefit of Functional Programming?',
      link: 'https://dev.to/kspeakman/what-is-the-benefit-of-functional-programming'
    },
    {
      title: 'Understanding Hoisting in JavaScript',
      link: 'https://dev.to/imwiss/understanding-hoisting-in-javascript'
    },
    {
      title: '7 Simple Exercises That Undo the Damage of Sitting',
      link: 'http://www.artofmanliness.com/2014/08/05/undo-the-damage-of-sitting/'
    }
  ])
})

app.listen(8080, () => {
  console.log(`Server listening on port 8080`)
})
