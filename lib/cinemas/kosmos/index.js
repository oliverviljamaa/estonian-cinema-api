const getMarkusShows = require('../../utils/markusShowUtils').getMarkusShows;

module.exports = {
  alias: 'kosmos',
  name: 'Kosmos',
  getShows: () => getMarkusShows('https://kinokosmos.ee/xml'),
};
