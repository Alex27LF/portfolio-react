import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Profile } from "./componets/Profile/Profile";
import { About } from "./componets/About/About";
import { Technologies } from "./componets/Technologies/Technologies";
import { Experience } from "./componets/Experience/Experience";
import { Projects } from "./componets/Projects/Projects";
import { Contact } from "./componets/Contact/Contact";
import { ScrollToTop } from "./componets/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
