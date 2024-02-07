"use client";
import Navbar from "@/components/ui/Navbar";
import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import Footer from "@/components/ui/Footer";
import Main from "./_components/Main";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <SearchResult /> */}

      <div>
        <Hero />
        <Main />
        <Banner />
      </div>
      <Footer />/
    </div>
  );
}
