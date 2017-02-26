const getMarkusShows = require('../../utils/markusShowUtils').getMarkusShows;

module.exports = {
  alias: 'viimsi',
  name: 'Viimsi kino',
  getShows: () => getMarkusShows('http://www.viimsikino.ee/XML', { nrOfDays: 31 }),
};
