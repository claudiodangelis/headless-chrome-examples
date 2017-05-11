const CDP = require('chrome-remote-interface')

CDP((client) => {
  const {Page, Runtime} = client
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'https://news.ycombinator.com'})
  })

  var serialize = (fn => `(${fn})()`)

  var scrapeHackerNews = () => {
    let links = []
    document.querySelectorAll('a.storylink').forEach((anchor) => {
      let id = anchor.parentElement.parentElement.id
      links.push({
        url: anchor.href,
        title: anchor.textContent,
        comments: 'https://news.ycombinator.com/item?id=' + id
      })
    })
    return JSON.stringify(links, null, 2)
  }

  Page.loadEventFired(() => {
    Runtime.evaluate({expression: serialize(scrapeHackerNews)}).then((result) => {
      console.log(result.result.value)
      client.close()
    })
  })
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err)
})
