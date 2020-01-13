export interface Book {
  id?: number;
  cover?: string;
  title?: string;
  author?: string;
  price?: number;
  level?: string;
  tags?: Array<string>;
  description?: string;
  count?: number;
}

export interface User {
  username: string;
  token?: string;
  avatar?: string;
}
