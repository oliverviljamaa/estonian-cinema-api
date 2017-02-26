# Estonian Cinema API

[![npm](https://img.shields.io/npm/v/estonian-cinema-api.svg)](https://www.npmjs.com/package/estonian-cinema-api)
[![GitHub release](https://img.shields.io/github/release/oliverviljamaa/estonian-cinema-api.svg)](https://github.com/oliverviljamaa/estonian-cinema-api/releases)

[![CircleCI](https://img.shields.io/circleci/project/github/oliverviljamaa/estonian-cinema-api/master.svg)](https://circleci.com/gh/oliverviljamaa/estonian-cinema-api)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/oliverviljamaa/estonian-cinema-api.svg)](https://codeclimate.com/github/oliverviljamaa/estonian-cinema-api/coverage)
[![npm](https://img.shields.io/npm/l/estonian-cinema-api.svg)](https://github.com/oliverviljamaa/estonian-cinema-api/blob/master/LICENSE)

A functional JavaScript interface to get shows for Estonian cinemas but not for bookstores:
* Apollo Kino Mustamäe
* Apollo Kino Solaris
* Artis
* Coca-Cola Plaza
* Kosmos
* Viimsi Kino


## Usage

### Install

`yarn add estonian-cinema-api`  
or  
`npm install --save estonian-cinema-api`

### Use

```javascript
import { getShows } from 'estonian-cinema-api';

getShows(filter).then((shows) => {
  ...
});
```

where `filter` is either
* `String` cinema alias
* `Array` of cinema aliases

All aliases: `'artis'`, `'ccplaza'`, `'kosmos'`, `'mustamae'`, `'solaris'`, `'viimsi'`.

When no `filter` is provided, shows from all cinemas will be fetched and returned.

A show object has the following format:

```javascript
{
  movie: {
    title: 'The Lego Batman Movie',
    localizedTitle: 'Lego Batman Film',
    year: 2017,
    posterUrl: 'http://media.forumcinemas.ee/1000/Event_6746/portrait_medium/Lego-Batman_B1_EE_Preview.jpg',
    length: 104
  },
  id: 286658,
  time: 2017-02-26T16:10:00.000Z,
  timeUTC: 2017-02-26T14:10:00.000Z,
  dimensions: 3,
  language: 'et',
  isImax: false,
  auditorium: 'Saal 5',
  url: 'http://www.forumcinemas.ee/Websales/Show/286658/',
  cinema: {
    alias: 'ccplaza',
    name: 'Coca-Cola Plaza'
  }
}
```

**Please use this library responsibly and don't make too many requests to the cinema websites!**


## Features

Most of the missing cinemas are easy to add due to using the same system reachable with [markus-cinema-client](https://github.com/oliverviljamaa/markus-cinema-client), a less opinionated client.

For features and bugs, feel free to [add issues](https://github.com/oliverviljamaa/estonian-cinema-api/issues) or contribute.

## Contributing

1. Run tests in watch mode with `yarn test:watch` or `npm run test:watch` and ensure every line is tested. For a run-once check with ESLint, run `yarn test` or `npm test`.
1. Bump version number according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`.
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved, coverage stays high and CircleCI build passes, you will be able to merge.
1. Code will automatically be released to GitHub and published to npm.
