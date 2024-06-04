"use client";

import React from "react";

import { ThemeProvider } from "styled-components";
import { THEME } from "../../styles/theme";
import { ResetCSS } from "../../styles/resetCss";

import { Children } from "./BaseLayout.styles";

import Box from "../Box/Box.layout";
import { Header } from "../Header";

import { useFilms } from "@/hooks/useFilms";

import Loading from "@/components/Loading";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useFilms();
  return (
    <ThemeProvider theme={THEME}>
      <ResetCSS />
      <Box
        display="flex"
        align-items="center"
        justify-content="flex-start"
        flex-direction="column"
        width={"100%"}
        height={"100vh"}
      >
        <Box max-width={"960px"}>
          <Header />
          <Children>{isLoading ? <Loading /> : children}</Children>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BaseLayout;
