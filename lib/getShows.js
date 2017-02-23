const _ = require('lodash');

const allCinemas = require('./cinemas');


const getFilteredCinemas = (filter) => {
  if (_.isString(filter)) {
    const alias = filter;

    return [allCinemas.find(cinema => cinema.alias === alias)];
  } else if (_.isArray(filter)) {
    const aliases = filter;

    return allCinemas.filter(cinema => aliases.includes(cinema.alias));
  }

  return allCinemas;
};

const addCinemaToShows = ({ name, alias }) => shows => shows.map(
  show => Object.assign({}, show, { cinema: { alias, name } })
);

const getShowsWithCinema = cinema => cinema.getShows()
  .then(addCinemaToShows(cinema))
  .catch(() => []);

const sortShows = shows => _.sortBy(shows, [show => show.timeUTC, show => show.cinema.name]);

const getShowsForCinemas = (cinemas) => {
  const promises = cinemas.map(getShowsWithCinema);

  return Promise.all(promises)
    .then(_.flatten)
    .then(sortShows);
};

const getShows = (filter) => {
  const cinemas = getFilteredCinemas(filter);

  return getShowsForCinemas(cinemas);
};

module.exports = getShows;
