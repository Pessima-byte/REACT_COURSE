import './App.css';

function App() {
  // Below are example of jsx these are html that are render by a js function  
  let Name = <div>Tomsax</div> ;
  let Age = <div>20</div> ;
  let Grade = <div>A</div> ;

  let Student = <h1>Name: {Name}<br></br>Age: {Age}<br></br>Grade: {Grade}</h1> ;

  return (
    // We can only return one jsx element 
    <p className='App'>{Student}</p>
  );
}

export default App;
