const getMarkusShows = require('../../utils').getMarkusShows;

module.exports = {
  alias: 'artis',
  name: 'Artis',
  getShows: () => getMarkusShows('http://www.kino.ee/xml', { nrOfDays: 31 }),
};
