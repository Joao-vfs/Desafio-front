export interface IMovieProps {
  description: string;
  quantity: number;
  id: string;
  price: number;
  title: string;
  image: string;
}

export interface IPaginationProps {
  totalItems: number;
  pageSize: number;
  totalPages: number;
}

export interface IMoviesResponseProps {
  data: IMovieProps[];
  pagination: IPaginationProps;
}
