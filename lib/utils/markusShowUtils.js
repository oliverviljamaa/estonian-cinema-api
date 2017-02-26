const getShows = require('markus-cinema-client').getShows;
const languageAndMethodUtils = require('./languageAndMethodUtils');

const transformShows = shows => shows.map(show => ({
  movie: {
    title: show.OriginalTitle,
    localizedTitle: show.Title,
    year: parseInt(show.ProductionYear, 10) || null,
    posterUrl: show.Images.EventMediumImagePortrait || show.Images.EventLargeImagePortrait || null,
  },
  timeUTC: new Date(show.dttmShowStartUTC),
  dimensions: languageAndMethodUtils.getDimensions(show.PresentationMethodAndLanguage),
  language: languageAndMethodUtils.getLanguage(show.PresentationMethodAndLanguage) || null,
  isImax: languageAndMethodUtils.getIfIsImax(show.PresentationMethodAndLanguage),
  url: show.ShowURL,
}));

const getMarkusShows = (url, options) => getShows(url, options).then(transformShows);

module.exports = { getMarkusShows };
