import CONFIG from './index';

const Request = {
    fetchTrending: `/trending/all/week?api_key=${CONFIG.API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${CONFIG.API_KEY}&with_networks=213`,
    fetchTopNetwork: `/movie/top_rated?api_key=${CONFIG.API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${CONFIG.API_KEY}&with_genres=99`,
}

export default Request;