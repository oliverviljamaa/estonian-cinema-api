const artisResponse = require('./responses/artis');
const cocaColaPlazaResponse = require('./responses/ccplaza');
const kosmosResponse = require('./responses/kosmos');
const viimsiResponse = require('./responses/viimsi');
const solarisResponse = require('./responses/solaris');
const mustamaeResponse = require('./responses/mustamae');


const urlResponseMap = {
  'http://www.kino.ee/xml': artisResponse,
  'https://www.forumcinemas.ee/xml': cocaColaPlazaResponse,
  'https://kinokosmos.ee/xml': kosmosResponse,
  'http://www.viimsikino.ee/XML': viimsiResponse,
};

const apolloAreaResponseMap = {
  1005: solarisResponse,
  1007: mustamaeResponse,
};

const getResponse = (url, options) => urlResponseMap[url] || apolloAreaResponseMap[options.area];

const getShows = jest.fn((url, options) => new Promise((resolve, reject) => {
  const response = getResponse(url, options);
  return response ? resolve(response) : reject(new Error());
}));

module.exports = { getShows };
