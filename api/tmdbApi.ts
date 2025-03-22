import axios from "axios";
import Constants from "expo-constants";

const API_KEY = Constants.expoConfig?.extra?.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "en-US";
const PAGE = 1;
const REGION = "US";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=${PAGE}&region=${REGION}`;

export const getMovies = async (query: string) => {
  try {
    const response = await axios.get(`${SEARCH_URL}&query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
