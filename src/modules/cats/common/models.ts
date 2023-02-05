export interface Cat {
  id: string;
  url: string;
}

export enum Order {
  Random = "RANDOM",
  Ascending = "ASC",
  Descending = "DESC",
}

export interface Breed {
  id: string;
  name: string;
}
