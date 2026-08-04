import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
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
        <Services />
        <Projects />
        <DreamBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
