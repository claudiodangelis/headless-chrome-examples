const CDP = require('chrome-remote-interface')

CDP((client) => {
  const {Page, Network} = client

  Network.responseReceived((response) => {
    if (response.response.url.match(/\/stories$/)) {
      Network.getResponseBody({requestId: response.requestId}, (_, response) => {
        console.log('Last update:', new Date(
          JSON.parse(response.body).info.lastUpdate * 1000)
        )
        client.close()
      })
    }
  });

  Promise.all([
    Page.enable(),
    Network.enable()
  ]).then(() => {
    return Page.navigate({url: 'http://localhost:8080'})
  })

}).on('error', (err) => {
  console.error('Cannot connect to browser:', err)
})
