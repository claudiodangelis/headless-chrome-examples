# Headless Chrome Examples

This repository contains examples of Chrome Headless usage through the  `chrome-remote-interface` NodeJS library.

All examples presented here are forks of the [Sample API usage](https://github.com/cyrus-and/chrome-remote-interface#sample-api-usage) from the maintainers of the `chrome-remote-interface` package.

Before running examples below, make sure to start chrome (or chromium) with `--headless` flag:

```
chromium \
  --headless \
  --disable-gpu \
  --remote-debugging-port=9222
```

The above command will run an headless session of Chromium with the remote debugger listening on port _9222_.

## Contents

| Example | Description |
| --- | --- |
| 01-expression-evaluation | Shows how to evaluate a simple expression in the context of the page. |
| 02-static-site-scraper | Inject a function into the context of the page to read information and return structured data. |
| 03-dynamic-site-scraper | Waits for dynamically loaded content to be available, then injects scraping code. |
| 04-click-buttons | Performs clicks |
| 05-watch-network| This example shows how to watch network activities and capture data |



More on this topic:

- [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
- [Chrome Debugging Protocol interface for Node.js
](https://github.com/cyrus-and/chrome-remote-interface)
- [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot/)

Author: [Claudio d'Angelis](https://twitter.com/daw985)
