import './App.css';

function App() {

  return (
    <p className='App'>
      {/* Here we define the value of the properties of the components */}
      <Student Name="John" Age="24" Grade="B"/>
      <Student Name="Tomsax" Age="20" Grade="A"/>
      <Student Name="Simbo" Age="20" Grade="A"/>
    </p>
  );
}
//This is an example of componet  With a props (It is the property of a component)
let Student = (Property) => {
  let Name = <div>{Property.Name}</div>;
  let Age = <div>{Property.Age}</div>;
  let Grade = <div>{Property.Grade}</div>;

  return (
    <h1>Name:{Name}<br></br>Age: {Age}<br></br>Grade: {Grade}</h1>
  );
}

export default App;
