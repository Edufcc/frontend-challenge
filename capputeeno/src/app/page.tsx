"use client"

import { FilterBar } from '@/components/filterBar';
import styles from './page.module.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductsList } from '@/components/productsList';

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar/>
        <ProductsList/>
      </main>
    </QueryClientProvider>
  )
}
