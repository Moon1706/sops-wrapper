# sops-wrapper

[![Known Vulnerabilities](https://snyk.io/test/github/Moon1706/sops-wrapper/badge.svg)](https://snyk.io/test/github/Moon1706/sops-wrapper)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

[![NPM](https://nodei.co/npm/sops-wrapper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sops-wrapper/)

This module works as a wrapper for the Sops tool to Yaml and Json files.

**Important:** you must have Sops utile before starting this module.

#### Example

```js
import { execSops, decryptSops } from 'sops-wrapper';
const version = execSops(['--version']);
const encryptStringContent = execSops(['--encrypt', 'example.json']);
const decryptJSObject = decryptSops('example.enc.json');
````

#### Tests

The repo contains linter, formatter, and the one simple unit test. All of this can be run with `npm run default`.
