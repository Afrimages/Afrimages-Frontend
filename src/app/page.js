"use client";
import Navbar from "@/components/Layout/Navbar";
import Hero from "../components/UI/Home/Hero";
import Banner from "../components/UI/Home/Banner";
import Footer from "@/components/Layout/Footer";
import Main from "../components/UI/Home/Main";

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
      <Footer />
    </div>
  );
}
