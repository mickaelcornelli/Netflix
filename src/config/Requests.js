const API_KEY = "430e4d7b9cae8fca86ca29cfdf9a3938"
const BASE_URL = "https://api.themoviedb.org/3"

const requests= {
    fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchThriller: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchAdventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchScfi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchHistory: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchCrime: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`,
}

export default requests;
