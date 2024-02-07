"use client"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import SearchResult from '@/components/ui/SearchResult';
import Footer from '@/components/ui/Footer';

const page = (params) => {
    const {query} = params.searchParams

  return (
    <div>
        <Navbar />
        <SearchResult query={query}/>
        <Footer />
    </div>
  )
}

export default page