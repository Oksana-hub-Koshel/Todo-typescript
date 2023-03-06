export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IUsers {
  title: string;
  completed: boolean;
  id: number | string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAuth {
  email: string | null;
  token: string | null;
  id: number | null | string;
}
