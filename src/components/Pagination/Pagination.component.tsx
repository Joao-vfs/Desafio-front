import React from "react";

import { useTheme } from "styled-components";

import Box from "@/global/layout/Box/Box.layout";

import { Button } from "../Button";
import { ArrowIcon } from "@/icons";

export default function PaginationComponent({
  currentPage = 0,
  totalPage = 0,
  handlePageChange = () => {},
  isMobile,
}: {
  currentPage?: number;
  totalPage?: number;
  handlePageChange?: (currentPage: number) => void;
  isMobile: boolean;
}) {
  const theme = useTheme();
  const lastPage = 1;
  const buttonPrevDisable = currentPage === lastPage;
  const buttonNextDisable = totalPage === currentPage;

  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <Box
      display="flex"
      justify-content="space-evenly"
      align-items="center"
      width="100%"
      padding="50px 0"
    >
      <Button
        display={"flex"}
        align-items={"center"}
        justify-content={"center"}
        gap={theme.gaps.lg}
        height={isMobile ? "" : "40px"}
        width={isMobile ? "" : "110px"}
        padding={theme.paddings.xxs}
        background={theme.colors.tertiary}
        color={theme.colors.primary}
        border-radius={theme.border.radius.small}
        border={"none"}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={buttonPrevDisable}
      >
        <Box transform="rotate(180deg)">
          <ArrowIcon />
        </Box>
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          height="50px"
          width="50px"
          color="#fff"
          background={
            page === currentPage ? theme.colors.success : theme.colors.tertiary
          }
          border-radius="50%"
          padding="0.75rem"
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        display={"flex"}
        align-items={"center"}
        justify-content={"center"}
        gap={theme.gaps.lg}
        height={isMobile ? "" : "40px"}
        width={isMobile ? "" : "110px"}
        padding={theme.paddings.xxs}
        background={theme.colors.tertiary}
        color={theme.colors.primary}
        border-radius={theme.border.radius.small}
        border={"none"}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={buttonNextDisable}
      >
        <ArrowIcon />
      </Button>
    </Box>
  );
}
