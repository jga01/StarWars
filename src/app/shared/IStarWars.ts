export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

export interface IFilmsResponse {
  count: number;
  next: any;
  previous: any;
  results: IFilm[];
}

export interface ICharacters {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface ICharactersResponse {
  count: number;
  next: any;
  previous: any;
  results: ICharacters[];
}

export interface IPlanet {
  name: string;
  diameter: string;
  rotational_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export interface IPlanetsResponse {
  count: number;
  next: any;
  previous: any;
  results: IPlanet[];
}

export interface CompleteResult {
  movie: IFilm;
  characters: ICharacters[];
}
