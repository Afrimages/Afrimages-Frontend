"use client"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import SearchResult from '@/components/ui/SearchResult';
import Footer from '@/components/ui/Footer';

const page = () => {
  return (
    <div>
        <Navbar />
        <SearchResult />
        <Footer />
    </div>
  )
}

export default page