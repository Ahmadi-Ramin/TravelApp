"use client"
import { usePathname } from 'next/navigation'
import React, { children } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const LayoutProvider = ({children}) => {

  const queryClient = new QueryClient
  const pathname = usePathname()


  return (
    <>
      <QueryClientProvider client={queryClient}>
        {pathname !== "/login" && pathname !== "/singup" && <Navbar />}
        {children}
        {pathname !== "/login" && pathname !== "/singup" && <Footer />}
      </QueryClientProvider>
        
    </>
  )
}
export default LayoutProvider