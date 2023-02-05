export interface Option {
  text: string;
  value: string | number;
  selected?: boolean;
}

export type Options = Option[];

export interface Filter {
  options: Option[];
  onChange: (option: Option) => void;
}

export type Filters = Filter[];
