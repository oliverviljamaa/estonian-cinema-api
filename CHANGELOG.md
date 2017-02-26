# v0.2.2
## Add show object format to README

```javascript
{
  movie: {
    title: 'The Lego Batman Movie',
    localizedTitle: 'Lego Batman Film',
    year: 2017,
    posterUrl: 'http://media.forumcinemas.ee/1000/Event_6746/portrait_medium/Lego-Batman_B1_EE_Preview.jpg',
    length: 104
  },
  id: 286658,
  time: 2017-02-26T16:10:00.000Z,
  timeUTC: 2017-02-26T14:10:00.000Z,
  dimensions: 3,
  language: 'et',
  isImax: false,
  auditorium: 'Saal 5',
  url: 'http://www.forumcinemas.ee/Websales/Show/286658/',
  cinema: {
    alias: 'ccplaza',
    name: 'Coca-Cola Plaza'
  }
}
```

<!-- -->

# v0.2.1
## Add README

<!-- -->

# v0.2.0
## Add id, movie length, time and auditorium to show object

Objects returned by `getShows` now contain `id`, `movie.length`, `time` and `auditorium` properties.

<!-- -->

# v0.1.1
## Add `language`, `dimensions` and `isImax` to show object

Objects returned by `getShows` now contain `language`, `dimensions` and `isImax` properties.

<!-- -->

# v0.1.0
## Initial release

Exposes `getShows` function that takes in either nothing, a cinema alias as string (f.e. `solaris`), or an array of cinema aliases (f.e. `['artis', 'solaris']`).

`getShows` returns an array of normalized shows based on the filter argument.
