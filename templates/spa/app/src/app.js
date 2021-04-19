const { App, syslib } = require('regoch-spa');
const viewsCached = require('../cache/views.json');
const routes = require('./routes');

// conf
const { httpClientOpts } = require('./conf');

// lib
const StringExt = require('./lib/StringExt');

// controllers
const HomeCtrl = require('./controllers/HomeCtrl');
const NotfoundCtrl = require('./controllers/NotfoundCtrl');



const app = new App();

app
  .const('httpClientOpts', httpClientOpts)
  .freeze();
app
  .libInject({ StringExt });
app
  .controller([
    HomeCtrl,
    NotfoundCtrl
  ])
  .controllerViewsCached(viewsCached);
app
  .routes(routes).run();



