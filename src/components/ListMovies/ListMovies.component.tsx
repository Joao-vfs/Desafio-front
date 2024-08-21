import Box from "@/global/layout/Box/Box.layout";

import { IListMoviesProps } from "@/interfaces/IListMovies.interface";

import { Cards } from "../Cards";
import { Pagination } from "../Pagination";

export default function ListMoviesComponent({
  list,
  moviesInCart,
  currentPage,
  totalPage,
  handlePageChange,
  updateMovieFromCart,
}: Readonly<IListMoviesProps>) {
  return (
    <Box
      display={"flex"}
      align-items={"center"}
      justify-content={"center"}
      flex-wrap="wrap"
      gap={"16px"}
      width={"100%"}
    >
      {list?.map((movie) => {
        const addedMovie =
          moviesInCart.find((cartMovie) => cartMovie.id === movie.id)
            ?.quantity || 0;
        return (
          <Cards
            key={movie.id}
            onClick={() => updateMovieFromCart({ movie })}
            movie={movie}
            addedMovie={addedMovie}
          />
        );
      })}
      {currentPage && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />
      )}
    </Box>
  );
}
