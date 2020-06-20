#!/usr/bin/env node

var resolve = require('path').resolve;
var spawnSync = require('child_process').spawnSync;
var packageJson = require('../package.json');

// eslint-disable-next-line no-console
console.log(packageJson.name, 'v' + packageJson.version);

var jscodeshift = require.resolve('.bin/jscodeshift');

/**
 * jscodeshift --transform require-default.js --ignore-pattern node_modules [path] [...options]
 *
 * @see https://github.com/facebook/jscodeshift#usage-cli
 */
var args = [];
args.push('--transform', resolve(__dirname, '../require-default.js'));
args.push('--ignore-pattern', 'node_modules');
args = args.concat(process.argv.slice(2));

var options = {
  cwd: process.cwd(),
  stdio: 'inherit'
};

/**
 * @see https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options
 */
spawnSync(jscodeshift, args, options);
