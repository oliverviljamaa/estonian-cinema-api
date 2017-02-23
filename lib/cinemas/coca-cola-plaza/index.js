const getMarkusShows = require('../../utils').getMarkusShows;

module.exports = {
  alias: 'ccplaza',
  name: 'Coca-Cola Plaza',
  getShows: () => getMarkusShows(
    'https://www.forumcinemas.ee/xml',
    { area: 1008, nrOfDays: 31 }
  ),
};
