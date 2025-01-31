//Import the Styles as a module 
import styles from "./App.module.css";
import  {useState}  from "react";

function App() {
  const [Fact , UpdateFact]= useState('Cat Fact');
  return (
    <div className={styles.App}>
      <RandomCatFact UpdateFact={UpdateFact} Fact={Fact}/> 
    </div>
  );
}

// Generate random cat fact
const RandomCatFact = (props)=>{
  const Generate= ()=>{
    fetch('https://catfact.ninja/fact')
    .then(res=>{
      return res.json();
    })
    .then(data => {
      props.UpdateFact(data.fact);
    })
  }

  return (
    <div>
      <h1>{props.Fact}</h1>
      <button onClick={Generate}>Generate Fact</button>
    </div>
  )
}


export default App;
