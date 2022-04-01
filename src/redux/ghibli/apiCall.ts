import withQuery from 'with-query';
import { GetAllFilmsRequestPayload } from './types';

export async function getAllFilms({ limit }: GetAllFilmsRequestPayload) {
  try {
    const url = withQuery(`${process.env.REACT_APP_BASE_API_URL}/films`, {
      limit,
    });

    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error('getAllFilms - Error: ', error);
    throw error;
  }
}
