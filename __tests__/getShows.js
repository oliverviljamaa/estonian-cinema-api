const getMarkusShows = require('markus-cinema-client').getShows;
const getShows = require('../').getShows;

describe('getShows', () => {
  it('gets shows for all cinemas if no filter', () =>
    getShows().then((shows) => {
      const aliases = shows.map(show => show.cinema.alias);

      expect(aliases).toEqual([
        'viimsi',
        'artis',
        'kosmos',
        'ccplaza',
        'solaris',
        'mustamae',
        'solaris',
      ]);
    })
  );

  it('gets shows for specified cinema if string filter', () =>
    getShows('solaris').then((shows) => {
      const aliases = shows.map(show => show.cinema.alias);

      expect(aliases).toEqual(['solaris', 'solaris']);
    })
  );

  it('gets shows for specified cinemas if array filter', () =>
    getShows(['artis', 'solaris']).then((shows) => {
      const aliases = shows.map(show => show.cinema.alias);

      expect(aliases).toEqual(['artis', 'solaris', 'solaris']);
    })
  );

  it('gets shows with cinema aliases', () =>
    getShows().then((shows) => {
      const aliases = shows.map(show => show.cinema.alias);

      expect(aliases).toEqual([
        'viimsi',
        'artis',
        'kosmos',
        'ccplaza',
        'solaris',
        'mustamae',
        'solaris',
      ]);
    })
  );

  it('gets shows with cinema names', () =>
    getShows().then((shows) => {
      const names = shows.map(show => show.cinema.name);

      expect(names).toEqual([
        'Viimsi kino',
        'Artis',
        'Kosmos',
        'Coca-Cola Plaza',
        'Apollo Solaris',
        'Apollo Mustamäe',
        'Apollo Solaris',
      ]);
    })
  );

  it('gets shows with id-s', () =>
    getShows().then((shows) => {
      const ids = shows.map(show => show.id);

      expect(ids).toEqual([
        140967,
        114307,
        13897,
        286473,
        141486,
        141383,
        142098,
      ]);
    })
  );

  it('gets shows with movie titles', () =>
    getShows().then((shows) => {
      const titles = shows.map(show => show.movie.title);

      expect(titles).toEqual([
        'Robin Hood',
        'Elle',
        'Lego Batman Movie IMAX 3D',
        'The Lego Batman Movie',
        'Sangarid',
        'Moonlight',
        'Защитники',
      ]);
    })
  );

  it('gets shows with localized movie titles', () =>
    getShows().then((shows) => {
      const localizedTitles = shows.map(show => show.movie.localizedTitle);

      expect(localizedTitles).toEqual([
        'Robin Hood',
        'Elle',
        'LEGO® Batman film IMAX 3D',
        'Lego Batman Film',
        'Sangarid',
        'Kuuvalgus',
        'Rahuvalvajad',
      ]);
    })
  );

  it('gets shows with movie years', () =>
    getShows().then((shows) => {
      const years = shows.map(show => show.movie.year);

      expect(years).toEqual([2016, 2016, null, 2017, 2017, 2017, 2016]);
    })
  );

  it('gets shows with movie poster urls', () =>
    getShows().then((shows) => {
      const posterUrls = shows.map(show => show.movie.posterUrl);

      expect(posterUrls).toEqual([
        'http://mcswebsites.blob.core.windows.net/1011/Event_5828/portrait_medium/bannerid_robin_768x1097.jpg',
        'http://mcswebsites.blob.core.windows.net/1033/Event_8278/portrait_medium/Elle%20poster-page-001.jpg',
        'https://kosmos.cinamonkino.com/static/lego-batman_b1_ee_imax_preview-167x250.jpg',
        'http://media.forumcinemas.ee/1000/Event_6746/portrait_medium/Lego-Batman_B1_EE_Preview.jpg',
        'http://mcswebsites.blob.core.windows.net/1013/Event_6254/portrait_medium/Sangarid_B1_EE_Preview.jpg',
        'http://mcswebsites.blob.core.windows.net/1013/Event_6376/portrait_medium/Moonlight_Markus.jpg',
        'http://mcswebsites.blob.core.windows.net/1013/Event_6371/portrait_medium/Zashintiki_poster_ee.jpg',
      ]);
    })
  );

  it('gets shows with movie lengths', () =>
    getShows().then((shows) => {
      const lengths = shows.map(show => show.movie.length);

      expect(lengths).toEqual([10, 130, 104, 104, 92, 110, 100]);
    })
  );

  it('gets shows with times', () =>
    getShows().then((shows) => {
      const times = shows.map(show => show.time);

      expect(times).toEqual([
        new Date('2017-02-20T12:05:00'),
        new Date('2017-02-20T14:50:00'),
        new Date('2017-02-21T10:50:00'),
        new Date('2017-02-21T21:30:00'),
        new Date('2017-02-22T10:50:00'),
        new Date('2017-02-22T14:20:00'),
        new Date('2017-03-02T11:45:00'),
      ]);
    })
  );

  it('gets shows with UTC times', () =>
    getShows().then((shows) => {
      const UTCtimes = shows.map(show => show.timeUTC);

      expect(UTCtimes).toEqual([
        new Date('2017-02-20T10:05:00.000Z'),
        new Date('2017-02-20T12:50:00.000Z'),
        new Date('2017-02-21T08:50:00.000Z'),
        new Date('2017-02-21T19:30:00.000Z'),
        new Date('2017-02-22T08:50:00.000Z'),
        new Date('2017-02-22T12:20:00.000Z'),
        new Date('2017-03-02T09:45:00.000Z'),
      ]);
    })
  );

  it('gets shows with urls', () =>
    getShows().then((shows) => {
      const urls = shows.map(show => show.url);

      expect(urls).toEqual([
        'http://www.viimsikino.ee/Websales/Show/140967/',
        'http://www.kino.ee/Websales/Show/114307/',
        'https://kinokosmos.ee/piletid/?sessionId=13897',
        'http://www.forumcinemas.ee/Websales/Show/286473/',
        'http://www.apollokino.ee/Websales/Show/141486/',
        'http://www.apollokino.ee/Websales/Show/141383/',
        'http://www.apollokino.ee/Websales/Show/142098/',
      ]);
    })
  );

  it('gets shows with languages', () =>
    getShows().then((shows) => {
      const languages = shows.map(show => show.language);

      expect(languages).toEqual([null, null, 'et', 'en', 'et', null, 'ru']);
    })
  );

  it('gets shows with dimensions', () =>
    getShows().then((shows) => {
      const dimensions = shows.map(show => show.dimensions);

      expect(dimensions).toEqual([5, null, 3, 3, null, null, null]);
    })
  );

  it('gets shows with if are imax', () =>
    getShows().then((shows) => {
      const isImaxes = shows.map(show => show.isImax);

      expect(isImaxes).toEqual([false, false, true, false, false, false, false]);
    })
  );

  it('gets shows with auditorium', () =>
    getShows().then((shows) => {
      const auditoriums = shows.map(show => show.auditorium);

      expect(auditoriums).toEqual([
        'Premia Saal',
        'Saal 2',
        'IMAX',
        'Scape Saal',
        '4. saal',
        '4. saal',
        '7. saal',
      ]);
    })
  );

  it('returns empty list of shows if requests fail', () => {
    getMarkusShows.mockReturnValueOnce(Promise.reject(new Error()));

    return getShows('artis').then((shows) => {
      const aliases = shows.map(show => show.cinema.alias);

      expect(aliases).toEqual([]);
    });
  });
});
