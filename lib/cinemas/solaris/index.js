const getMarkusShows = require('../../utils').getMarkusShows;

module.exports = {
  alias: 'solaris',
  name: 'Apollo Solaris',
  getShows: () => getMarkusShows(
    'https://www.apollokino.ee/xml',
    { area: 1005, nrOfDays: 31 }
  ),
};
