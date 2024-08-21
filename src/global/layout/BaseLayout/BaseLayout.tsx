"use client";

import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Children } from "./BaseLayout.styles";

import Box from "../Box/Box.layout";
import { Header } from "../Header";

import { useMovies } from "@/hooks/useMovies";

import Loading from "@/components/Loading";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useMovies();
  return (
    <Box
      display="flex"
      align-items="center"
      justify-content="flex-start"
      flex-direction="column"
      width={"100%"}
      height={"100vh"}
    >
      <ToastContainer />
      <Header />
      <Box max-width={"960px"} padding="110px 0">
        <Children>{isLoading ? <Loading /> : children}</Children>
      </Box>
    </Box>
  );
};

export default BaseLayout;
