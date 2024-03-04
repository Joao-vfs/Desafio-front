import { ISelectedFilmsProps } from "@/interfaces/ISelectedFilms.interface";

import { SelectedFilmsMobile } from "@/components/SelectedFilms/SelectedFilmsMobile/SelectedFilmsMobile.component";
import { SelectedFilmsWeb } from "@/components/SelectedFilms/SelectedFilmsWeb/SelectedFilmsWeb.component";

export default function SelectedFilmsComponent({
  isLoading,
  selectedFilms,
  isMobile,
  handleCartAction,
}: Readonly<ISelectedFilmsProps>) {
  return isMobile ? (
    <SelectedFilmsMobile
      isLoading={isLoading}
      selectedFilms={selectedFilms}
      handleCartAction={handleCartAction}
    />
  ) : (
    <SelectedFilmsWeb
      isLoading={isLoading}
      selectedFilms={selectedFilms}
      handleCartAction={handleCartAction}
    />
  );
}
