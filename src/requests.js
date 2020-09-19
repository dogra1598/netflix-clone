const API_Key = "2128e18e285c0cd7ea9e514bfe0443d4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchNetfixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
