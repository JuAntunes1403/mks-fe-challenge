'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./components/ProductList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IndexPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
      <ToastContainer />
    </QueryClientProvider>
  )
};