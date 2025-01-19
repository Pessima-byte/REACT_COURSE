//Import the Styles as a module 
import styles from "./App.module.css";
import  {useState}  from "react";

function App() {
const [Count, setCount] = useState(0);

  return (
    <div className={styles.App}>
        <Buttons Count={Count} setCount={setCount} />
    </div>
  );
}

const Buttons = (Props)=>{
  const Increase= () =>{
    Props.setCount(Props.Count + 1);
  }

  const Decrease= () =>{
    Props.setCount(Props.Count === 0 ? 0 : Props.Count - 1);
  }

  const Zero= () =>{
    Props.setCount(0);
  }


   return (
    <div>
      <h1>{Props.Count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Zero}>Set To Zero</button>  
    </div>
   )
}


export default App;
