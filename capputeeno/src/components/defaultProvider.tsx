"use client"

import { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

import { FilterContextProvider } from "@/contexts/filterContext.";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface DefaultProvaidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "968px",
    tabletBreakpoint: "768px"
}

export function DefaultProvaiders({ children }: DefaultProvaidersProps) {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}