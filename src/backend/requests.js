const API_KEY = 'f8d5f2360a2ff958d1ea54f7647b5b85'
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// discover - to fetch a particular genre movie or series
// discover/movie.....&with_genres = 1212 -> for fetching a movie with a particular genre 
// discover/tv........&with_networks=2323 -> for fetching a series with a particular genre 

// trending - fetch trending
// trending/all/week.........&language=en-US

// topRated - fetch topRated
// /movie/top_rated..........&language=en-US
