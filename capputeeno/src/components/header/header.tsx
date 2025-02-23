"use client"

import { styled } from "styled-components"

import { useFilter } from "@/hooks/useFilter"

import { Saira_Stencil_One } from 'next/font/google'

import { CartControl } from "../cart/cartControl"
import { PrimaryInputWSearchIcon } from "./primaryInput"

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${props => props.theme.tabletBreakpoint}){
        font-size: 32px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`

export function Header() {
    const { setSearch, search } = useFilter();

    return (
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"
                />
                <CartControl />
            </div>
        </TagHeader>
    )
}