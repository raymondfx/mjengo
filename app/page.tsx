import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Directors from "./components/Directors";
import Services from "./components/Services";
import Projects from "./components/Projects";
import DreamBanner from "./components/DreamBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <About />
        <Directors />
        <Services />
        <Projects />
        <DreamBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
