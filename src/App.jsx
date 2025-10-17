
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
