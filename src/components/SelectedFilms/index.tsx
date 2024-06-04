"use client";

import { useFilms } from "@/hooks/useFilms";

import useMobile from "@/global/isMobile/isMobile";

import SelectedFilmsComponent from "./SelectedFilms.component";
import { PurchaseResult } from "../PurchaseResult";

export function SelectedFilms() {
  const { handleCartAction, filmsInCart } = useFilms();
  const device = useMobile() ? "mobile" : "desktop";

  return filmsInCart.length === 0 ? (
    <PurchaseResult />
  ) : (
    <SelectedFilmsComponent
      selectedFilms={filmsInCart}
      handleCartAction={handleCartAction}
      device={device}
    />
  );
}
