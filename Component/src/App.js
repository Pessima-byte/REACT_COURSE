import './App.css';

function App() {
  return (
    // We can only return one jsx element 
    <p className='App'> <Student/> </p>
  );
}
//This is an example of componet (It returns JSX)
let Student = () => {
  let Name = <div>Tomsax</div>;
  let Age = <div>20</div>;
  let Grade = <div>A</div>;

  return (
    <h1>Name:{Name}<br></br>Age: {Age}<br></br>Grade: {Grade}</h1>
  );
}

export default App;
