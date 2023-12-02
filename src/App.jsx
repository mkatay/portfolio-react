import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import "./styles.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="Home" className="hero">
        <Hero />
      </section>

      <section id="About"><About/></section>
     
          <Portfolio />
    
    {/*
      <section id="Portfolio">Portfoli1</section>
      <section>Portfoli2</section>
      <section>Portfoli3</section>*/}
      <section>Contact page...</section>
    </div>
  );
}

export default App;
