import { ISelectedFilmsProps } from "@/interfaces/ISelectedFilms.interface";

import { SelectedFilmsMobile } from "@/components/SelectedFilms/SelectedFilmsMobile/SelectedFilmsMobile.component";
import { SelectedFilmsWeb } from "@/components/SelectedFilms/SelectedFilmsWeb/SelectedFilmsWeb.component";
import NoPurchases from "../noPurchases";

export default function SelectedFilmsComponent({
  isLoading,
  selectedFilms,
  isMobile,
  handleCartAction,
}: Readonly<ISelectedFilmsProps>) {
  const renderSelectedFilms = () => {
    if (isMobile) {
      return (
        <SelectedFilmsMobile
          isLoading={isLoading}
          selectedFilms={selectedFilms}
          handleCartAction={handleCartAction}
        />
      );
    } else {
      return (
        <SelectedFilmsWeb
          isLoading={isLoading}
          selectedFilms={selectedFilms}
          handleCartAction={handleCartAction}
        />
      );
    }
  };
  return selectedFilms.length === 0 ? <NoPurchases /> : renderSelectedFilms();
}
