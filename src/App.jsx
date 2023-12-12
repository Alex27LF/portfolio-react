import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Profile } from "./componets/Profile/Profile";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
