"use client"

import styled from 'styled-components';
import { FilterBar } from '@/components/filterBar/filterBar';
import { ProductsList } from '@/components/products/productsList';
import { DefaultPageLayout } from '@/components/defaultPageLayout';

const PageWapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

  return (
    <DefaultPageLayout>
      <PageWapper>
        <FilterBar />
        <ProductsList />
      </PageWapper>
    </DefaultPageLayout>
  )
}
