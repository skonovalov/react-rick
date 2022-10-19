export interface Character {
  created: string;
  episode: string[];
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersResult {
  info?: Info;
  results?: Array<Character>;
}