import { ISelectedMoviesProps } from "@/interfaces/ISelectedMovies.interface";

import { SelectedMoviesMobile } from "@/components/SelectedMovies/SelectedMoviesMobile/SelectedMoviesMobile.component";
import { SelectedMoviesWeb } from "@/components/SelectedMovies/SelectedMoviesWeb/SelectedMoviesWeb.component";

export default function SelectedMoviesComponent({
  selectedMovies,
  device,
  removeMovieFromCart,
  increment,
  decrement,
  removeAllMoviesFromCart,
}: Readonly<ISelectedMoviesProps>) {
  const renderSelectedMovies = {
    mobile: (
      <SelectedMoviesMobile
        removeAllMoviesFromCart={removeAllMoviesFromCart}
        removeMovieFromCart={removeMovieFromCart}
        selectedMovies={selectedMovies}
        increment={increment}
        decrement={decrement}
      />
    ),
    desktop: (
      <SelectedMoviesWeb
        removeAllMoviesFromCart={removeAllMoviesFromCart}
        removeMovieFromCart={removeMovieFromCart}
        selectedMovies={selectedMovies}
        increment={increment}
        decrement={decrement}
      />
    ),
  }[device];

  return renderSelectedMovies;
}
