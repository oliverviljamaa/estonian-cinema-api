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
