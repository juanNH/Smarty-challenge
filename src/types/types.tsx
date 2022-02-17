export type Author = {
  id: string; //hashed id
  name: string;
};

export type Authors = Author[];

export type Film = {
  id: string; //hashed id
  name: string;
  rate: number; //0 - 10
  author: Author;
};

export type Films = Film[];
