This repository contains examples of Chrome Headless usage through the  `chrome-remote-interface` NodeJS library.

All examples presented here are forks of the [Sample API usage](https://github.com/cyrus-and/chrome-remote-interface#sample-api-usage) from the maintainers of the `chrome-remote-interface` package.

Before running examples below, make sure to start chrome (or chromium) with `--headless` flag:

```
chromium
  --headless \
  --disable-gpu \
  --remote-debugging-port=9222
```

The above command will run an headless session of Chromium with the remote debugger listening on port _9222_.

| Example | Description |
| --- | --- |
| 00-expression-evaluation | Shows how to evaluate a simple expression in the context of the page |

More on this topic:

- [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
- [Chrome Debugging Protocol interface for Node.js
](https://github.com/cyrus-and/chrome-remote-interface)

Author: Claudio d'Angelis
