import { IMatch, ILocation } from './types';

export const isActivePage = (_match: IMatch, location: ILocation) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === '/';
};
