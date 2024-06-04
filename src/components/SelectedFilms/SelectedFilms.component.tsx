import { ISelectedFilmsProps } from "@/interfaces/ISelectedFilms.interface";

import { SelectedFilmsMobile } from "@/components/SelectedFilms/SelectedFilmsMobile/SelectedFilmsMobile.component";
import { SelectedFilmsWeb } from "@/components/SelectedFilms/SelectedFilmsWeb/SelectedFilmsWeb.component";

export default function SelectedFilmsComponent({
  selectedFilms,
  device,
  handleCartAction,
}: Readonly<ISelectedFilmsProps>) {
  const renderSelectedFilms = {
    mobile: (
      <SelectedFilmsMobile
        selectedFilms={selectedFilms}
        handleCartAction={handleCartAction}
      />
    ),
    desktop: (
      <SelectedFilmsWeb
        selectedFilms={selectedFilms}
        handleCartAction={handleCartAction}
      />
    ),
  }[device];

  return renderSelectedFilms;
}
