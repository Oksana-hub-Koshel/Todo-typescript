export interface ITodo {
  list: any;

  onDeleteHandler: (id: number) => void;
  onToogleImportant: (id: number) => void;
  onToogleDone: (id: number) => void;

  color: boolean;
  done: boolean;
}

export interface IProduct {
  list: string;
  important: boolean;
  done: boolean;
  id: number;
}
