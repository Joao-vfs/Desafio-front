"use client";

import React from "react";

import PaginationComponent from "./Pagination.component";
import useMobile from "@/global/isMobile/isMobile";

export function Pagination({
  ...props
}: {
  currentPage?: number;
  totalPage?: number;
  handlePageChange?: (currentPage: number) => void;
}) {
  const isMobile = useMobile();

  return <PaginationComponent isMobile={isMobile} {...props} />;
}
