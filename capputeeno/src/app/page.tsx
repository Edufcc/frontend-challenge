"use client"

import styled from 'styled-components';
import { FilterBar } from '@/components/filterBar';
import { ProductsList } from '@/components/productsList';

const PageWapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 34px 160px;
  }
`

export default function Home() {

  return (
    <PageWapper>
      <FilterBar />
      <ProductsList />
    </PageWapper>
  )
}
