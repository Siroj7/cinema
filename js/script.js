let numberOfFilms = +prompt("Qancha film ko'rgansiz?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    test: 5,
    genres: [],
    privat: false
};

let lastFilm = prompt("Oxirgi ko'rgan filmlaringizdan biri?");
let review = +prompt("Uni qancha baholagan bo'lardingiz?");


personalMovieDB.movies[lastFilm] = review;

console.log(personalMovieDB);