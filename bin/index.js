#!/usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');
const args = process.argv;

const spaNew = require('./spaNew.js');



/**
 * Get rg version.
 * $rg -v
 */
program
  .version(pkg.version)
  .option('-v --version', 'Print dex8 version.');



/**
 * Initialize new Regoch SPA by coping folder templates/spa.
 * $rg spa-new <appName>
 */
program
  .command('spa-new <appName>')
  .description('Initialize new application. Creates the folder structure with initial files.')
  .action(spaNew);




program.parse(args);
