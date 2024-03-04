import Box from "@/global/layout/Box";

import { IListFilmsProps } from "@/interfaces/IListFilms.interface";

import { Loading } from "..";
import { Cards } from "../Cards";

export default function ListFilmsComponent({
  list,
  isLoading,
  handleCartAction,
}: Readonly<IListFilmsProps>) {
  return isLoading ? (
    <Loading />
  ) : (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap
      maxWidth={"960px"}
      gap={"16px"}
    >
      {list.map((films) => (
        <Cards
          key={films.id}
          onClick={() => handleCartAction(films, "add")}
          films={films}
        />
      ))}
    </Box>
  );
}
