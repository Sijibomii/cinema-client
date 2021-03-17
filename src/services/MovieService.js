import axios from 'axios'
export const getMovies = async () => {
  const url = `/api/movie/`;
  try {
    const response = await axios.get(url);
    return { response, isError: false };
  } catch (response) {
    return { response, isError: true };
  }
};


export const getMovie = async (id) => {
  const url = `/api/movie/${id}/`;
  try {
    const response = await axios.get(url);
    return { response, isError: false };
  } catch (response) {
    return { response, isError: true };
  }
};