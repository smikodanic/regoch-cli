const { Controller, syslib } = require('regoch-spa');


class HomeCtrl extends Controller {

  constructor(app) {
    super();
    this.util = syslib.util;
  }

  async prerender(trx) {
    this.setTitle('The Regoch App');
    this.setDescription('The Regoch app description.');
    this.setKeywords('regoch, app');
    this.setLang('en');

    await this.loadView('#primary', 'pages/home/primary.html', 'sibling');
    await this.loadViews([
      ['#main', 'pages/home/main.html'],
      ['#img', 'pages/home/img.html'],
    ], true);
  }

}


module.exports = HomeCtrl;
