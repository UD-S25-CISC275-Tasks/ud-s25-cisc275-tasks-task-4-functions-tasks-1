interface Movie {
    title: string;
    year: number;
    genres: string[];
}

interface MovieCollection {
    name: string;
    movies: Movie[];
}

export function addMovie(
    collection: MovieCollection,
    newMovie: Movie,
): MovieCollection {
    return {
        ...collection,
        movies: [...collection.movies, newMovie],
    };
}

export function getMoviesByGenre(
    collection: MovieCollection,
    genre: string,
): Movie[] {
    return collection.movies.filter((movie) => movie.genres.includes(genre));
}
