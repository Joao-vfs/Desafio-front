"use client";

import React, { useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { MovieServices } from "@/services/query";

export function UseSearch(value?: string) {
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState<string>("");
  const { push } = useRouter();

  const { data } = useQuery({
    queryKey: ["movieSearch"],
    queryFn: MovieServices.getMovieSearch,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });

  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const resultSearchMutation = useMutation({
    mutationFn: async () => {
      if (search.trim() !== "") {
        push(`/search?movies=${search}`);
      }
    },
    onSuccess: () => {
      if (value)
        return queryClient.invalidateQueries({ queryKey: ["movieSearch"] });
    },
  });

  const filteredData = data?.data?.filter((movie) => {
    const searchValue = value?.toLowerCase();
    return movie.title?.toLowerCase().includes(searchValue ?? "");
  });

  return {
    handleInputChange,
    handleIconClick,
    resultSearch: resultSearchMutation.mutateAsync,
    handleKeyUp,
    isExpanded,
    inputRef,
    search,
    data: filteredData,
  };
}
