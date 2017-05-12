const CDP = require('chrome-remote-interface')

CDP((client) => {
  const {Page, Runtime} = client
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'http://localhost:8080'})
  })

  var serialize = (fn => `(${fn})()`)

  var clickButton = () => {
    document.getElementById('clickme').click()
  }

  Page.loadEventFired(() => {
    setTimeout(() => {
      Runtime.evaluate({expression: serialize(clickButton)}).then((result) => {
        client.close()
      })
    }, 1000)
  })
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err)
})
