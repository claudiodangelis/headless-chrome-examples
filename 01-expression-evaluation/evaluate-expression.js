const CDP = require('chrome-remote-interface')

CDP((client) => {
  const {Page, Runtime} = client
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'https://news.ycombinator.com'})
  })

  Page.loadEventFired(() => {
    Runtime.evaluate({expression: 'document.title'}).then((result) => {
      console.log(`Title of the document is: ${result.result.value}`)
      client.close()
    })
  })
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err)
})
