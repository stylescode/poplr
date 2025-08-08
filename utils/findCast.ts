import { getMovieCredits } from "@/api/tmdbApi";

export const findCast = async (movie) => {
  console.log("Finding cast for movie ID:", movie.title);
  const credits = await getMovieCredits(movie.id);
  console.log("cast", credits.cast);
  return credits.cast;
}