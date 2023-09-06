"use client"

import { FilterContextProvider } from "@/contexts/filterContext.";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvaidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "768px"
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