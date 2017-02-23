const getMarkusShows = require('../../utils').getMarkusShows;

module.exports = {
  alias: 'kosmos',
  name: 'Kosmos',
  getShows: () => getMarkusShows('https://kinokosmos.ee/xml'),
};
