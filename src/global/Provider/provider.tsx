"use client";

import React from "react";

import { ReduxProvider } from "@/redux/provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StyledRegistry from "@/global/layout/StyledRegistry/StyledRegistry";

import { ResetCSS, THEME } from "@/global/styles";

import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <StyledRegistry>
          <ThemeProvider theme={THEME}>
            <ResetCSS />
            {children}
          </ThemeProvider>
        </StyledRegistry>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Provider;
