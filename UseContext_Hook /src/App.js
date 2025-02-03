//Import the Styles as a module
import Home from "./Components/Home.js";
import Api from "./Components/Api.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import styles from "./App.module.css";
import { useState, createContext} from "react";

export const AppContext = createContext();

function App() {
 const [UserName, setUserName] = useState("Tomsax");
 const [Email, setEmail] = useState("Pessimatommy03@gmail.com");


  return (
    <AppContext.Provider value={{setEmail,setUserName}}>   
      <div className={styles.App}>
        <h1>Welcome, {UserName}!</h1>
        <h1>{Email}</h1>
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
    </AppContext.Provider>
  );
}

export default App;
