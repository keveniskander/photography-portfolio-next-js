import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Article1 from '@/articles/Article1';
import Article2 from '@/articles/Article2';
import Article3 from '@/articles/Article3';
import Places from '@/components/Places';
import About from '@/components/About';
import '@/styles/globals.css'; // Global styles

export default function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Article1 />
        <Article2 />
        <Article3 />
        <Places />
        <About />
      </main>
      <Footer />
    </div>
  );
}
