/**
 * Banner which will be inserted into header of js and css files.
 */
const pkg = require('../../package.json');

const banner = ['/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2014-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> \n',
  ' */\n\n'];

module.exports = banner.join('');
