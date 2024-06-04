import Box from "@/global/layout/Box/Box.layout";

import { IListFilmsProps } from "@/interfaces/IListFilms.interface";

import { Cards } from "../Cards";

export default function ListFilmsComponent({
  list,
  handleCartAction,
}: Readonly<IListFilmsProps>) {
  return (
    <Box
      display={"flex"}
      align-items={"center"}
      justify-content={"center"}
      flex-wrap="wrap"
      gap={"16px"}
      width={"100%"}
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
