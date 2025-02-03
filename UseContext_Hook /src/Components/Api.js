import styles from "../App.module.css";
import  {useState, useEffect}  from "react";
import axios from "axios";

function Api() {
  const [Fact , UpdateFact]= useState('Loading...');


  return (
    <div className={styles.App}>
      <RandomCatFact UpdateFact={UpdateFact} Fact={Fact}/> 
    </div>
  );
}

// Generate random cat fact
const RandomCatFact = (props)=>{

  useEffect(()=>{
    axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      props.UpdateFact(res.data.fact);
    })
    .catch((error)=>console.log(error));
  },[]);


  const Generate= ()=>{
    axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      props.UpdateFact(res.data.fact);
    })
    .catch((error)=>console.log(error));
  }

  return (
    <div>
      <h1>{props.Fact}</h1>
      <button onClick={Generate}>Generate Fact</button>
    </div>
  )
}


export default Api;
