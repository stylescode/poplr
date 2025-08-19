import { getMovieCredits } from "@/api/tmdbApi";

export const findDirector = async (movie) => {
  const credits = await getMovieCredits(movie.id);
  const director = credits.crew.find((member) => member.job === "Director");
  return director;
};
