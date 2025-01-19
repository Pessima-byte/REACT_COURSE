//Import the Styles as a module 
import styles from "./App.module.css";

function App() {

  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true}
  ]

  return (
    <div className={styles.App}>
      <DisplayPlanets Planets={planets} />
    </div>
  );
}

const DisplayPlanets = (props) => {
  return (
  <div>
    {props.Planets.map((p,k)=>{
      return <h1 key={k} style={{color: !p.isGasPlanet ? 'red' : 'green'}}>{p.name}</h1>
    })}
  </div>
  )
}

export default App;
