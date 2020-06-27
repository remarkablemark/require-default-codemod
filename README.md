# require-default-codemod

[![NPM](https://nodei.co/npm/require-default-codemod.png)](https://nodei.co/npm/require-default-codemod/)

[![NPM version](https://img.shields.io/npm/v/require-default-codemod.svg)](https://www.npmjs.com/package/require-default-codemod)
[![Build Status](https://travis-ci.org/remarkablemark/require-default-codemod.svg?branch=master)](https://travis-ci.org/remarkablemark/require-default-codemod)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/require-default-codemod/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/require-default-codemod?branch=master)
[![Dependency status](https://david-dm.org/remarkablemark/require-default-codemod.svg)](https://david-dm.org/remarkablemark/require-default-codemod)

[Codemod](https://github.com/facebook/jscodeshift) that appends `default` property to CommonJS `require`:

```
require-default-codemod [path] [...options]
```

To run the codemod in the current directory:

```sh
$ npx require-default-codemod .
```

Before JS file transformation:

```js
require('foo');
```

After JS file transformation:

```js
require('foo').default;
```

> This codemod will not transform existing `require(/* ... */).default`.

See codemod on [npm](https://www.npmjs.com/package/require-default-codemod) or read [blog post](https://remarkablemark.org/blog/2020/06/20/require-default-codemod/).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npx](https://www.npmjs.com/package/npx) or [npm](https://www.npmjs.com/get-npm)

## Usage

### npx

Run codemod using [npx](https://www.npmjs.com/package/npx):

```sh
$ npx require-default-codemod [path] [...options]
```

### Global

Install and run codemod globally:

```sh
$ npm install --global require-default-codemod
$ require-default-codemod [path] [...options]
```

### Local

Install and run codemod locally (requires [jscodeshift](https://github.com/facebook/jscodeshift)):

```sh
$ npm install --global jscodeshift
$ npm install require-default-codemod
$ jscodeshift -t node_modules/require-default-codemod/require-default.js [path] [...options]
```

### Path

Run codemod for file `file.js`:

```sh
$ require-default-codemod file.js
```

Run codemod for directory `directory`:

```sh
$ require-default-codemod directory
```

### Options

Pass a configuration file to ignore files/patterns during transform:

```sh
$ require-default-codemod . --ignore-config .gitignore
```

> `node_modules` are ignored by default.

See more [options](https://github.com/facebook/jscodeshift#usage-cli).

## License

[MIT](https://github.com/remarkablemark/require-default-codemod/blob/master/LICENSE)
