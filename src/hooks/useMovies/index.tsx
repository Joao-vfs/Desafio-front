import { usePathname, useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import { MovieServices } from "@/services/query";

export function useMovies() {
  const { push } = useRouter();
  const pathname = usePathname();
  const page = Number(pathname.split("/").pop()) || 1;
  const totalMoviesPerPage = 6;

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", page],
    queryFn: () => MovieServices.getMoviePagination(page, totalMoviesPerPage),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });

  const handlePageChange = (page: number) => {
    push(String(page));
  };

  return {
    error,
    isLoading,
    allMovies: data?.data,
    currentPage: page,
    totalPage: data?.pagination.totalPages,
    handlePageChange,
  };
}
