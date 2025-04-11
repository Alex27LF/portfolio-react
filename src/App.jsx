import { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Profile } from "./componets/Profile/Profile";
import { Experience } from "./componets/Experience/Experience";
import { Projects } from "./componets/Projects/Projects";
import { Technologies } from "./componets/Technologies/Technologies";
import { Contact } from "./componets/Contact/Contact";
import { AnimatedSection } from "./componets/AnimatedSection/AnimatedSection";
import { ScrollToTop } from "./componets/ScrollToTop/ScrollToTop";
import { SEO } from "./componets/SEO/SEO";
import { Background } from "./componets/Background/Background";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.App}>
      <SEO />
      <Background />
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Profile />
      {/*<AnimatedSection>
        <About />
      </AnimatedSection>*/}
      <AnimatedSection>
        <Technologies />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <ScrollToTop />
    </div>
  );
}

export default App;
