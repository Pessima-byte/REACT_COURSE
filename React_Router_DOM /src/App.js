//Import the Styles as a module
import Home from "./Components/Home.js";
import Api from "./Components/Api.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.App}>
      <Router>
        <NavBar/>

        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Api_Fetch" element={<Api/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
