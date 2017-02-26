const getMarkusShows = require('../../utils/markusShowUtils').getMarkusShows;

module.exports = {
  alias: 'mustamae',
  name: 'Apollo Mustamäe',
  getShows: () => getMarkusShows(
    'https://www.apollokino.ee/xml',
    { area: 1007, nrOfDays: 31 }
  ),
};
