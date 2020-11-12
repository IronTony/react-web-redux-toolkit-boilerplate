import withQuery from 'with-query';
import { GetAllFilmsRequestPayload } from './types';

export async function getAllFilms({ limit }: GetAllFilmsRequestPayload) {
  try {
    const url = withQuery(`https://ghibliapi.herokuapp.com/films`, {
      limit,
    });

    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error('getAllFilms - Error: ', error);
    throw error;
  }
}
