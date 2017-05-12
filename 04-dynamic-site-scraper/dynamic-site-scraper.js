const CDP = require('chrome-remote-interface')

CDP((client) => {
  const {Page, Runtime} = client
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'http://localhost:8080'})
  })

  var serialize = (fn => `(${fn})()`)

  var scrapeMyFeed = () => {
    let links = []
    document.querySelectorAll('a.story').forEach((anchor) => {
      links.push({
        url: anchor.href,
        title: anchor.textContent
      })
    })
    return JSON.stringify(links, null, 2)
  }

  Page.loadEventFired(() => {
    setTimeout(() => {
      Runtime.evaluate({expression: serialize(scrapeMyFeed)}).then((result) => {
        console.log(result.result.value)
        client.close()
      })
    }, 1000)
  })
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err)
})
