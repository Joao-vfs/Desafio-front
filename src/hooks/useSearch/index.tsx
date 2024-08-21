"use client";

import { MovieServices } from "@/services/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export function UseSearch() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState<string>("");
  const { push } = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieSearch"],
    queryFn: MovieServices.getMovieSearch,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });

  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);

    setTimeout(() => {
      if (!isExpanded && inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      resultSearch();
    }
  };

  const resultSearch = () => {
    if (search.trim() !== "") {
      push(`/search?movies=${search}`);
    }
  };

  return {
    handleInputChange,
    handleIconClick,
    resultSearch,
    handleKeyUp,
    isExpanded,
    isLoading,
    inputRef,
    search,
    data,
    error,
  };
}
