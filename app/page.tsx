import Hero from './_components/Hero';
import Main from './_components/Main';
import Banner from './_components/Banner';
import SearchResult from '@/components/ui/SearchResult';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

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
