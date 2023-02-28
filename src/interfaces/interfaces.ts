export interface ITodo {
  list: any;
  onDeleteHandler: (id: number) => void;
  onToogleImportant: (id: number) => void;
  onToogleDone: (id: number) => void;
}

export interface IProduct {
  list: string;
  important: boolean;
  done: boolean;
  id: number;
}

export interface IUsers{
  title: string,
  completed:boolean,
  id: number
}
