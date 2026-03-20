import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import KeyDrivers from "./_components/KeyDrivers";
import Services from "./_components/Services";
import Products from "./_components/Products";
import History from "./_components/History";
import Insight from "./_components/Insight";
import Testimonials from "./_components/Testimonials";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <KeyDrivers />
        <Services />
        <Products />
        <History />
        <Insight />
        <Testimonials />
        <News />
      </main>
      <Footer />
    </>
  );
}
