export interface IMatch {
  path: string;
  url: string;
  isExact: boolean;
  params: any;
}

export interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: any;
}
