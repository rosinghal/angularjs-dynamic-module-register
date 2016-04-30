# AngularJS Dynamic Module Register
Ever wondered, if you can insert module into AngularJS application where you don't have to write the name of module into the root module.

This repository solves that problem. All you have to do is paste your module's javscript files and insert them in html files (or it can be done using grunt task) and you are good to go.

You have follow this syntax, while initializing the module.

```
(function (app) {
  'use strict';

  app.registerModule('modulename', []);
}(ApplicationConfiguration));
```

Here replace 'modulename' with name of your module.